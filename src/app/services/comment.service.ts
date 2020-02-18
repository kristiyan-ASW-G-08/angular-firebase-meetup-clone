import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import Comment from 'src/app/models/Comment';
import { map } from 'rxjs/operators';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  commentsCollection: AngularFirestoreCollection<Comment>;
  commentDoc: AngularFirestoreDocument<Comment>;
  comments: Observable<Comment[]>;
  comment: Observable<Comment>;
  constructor(private fireStore: AngularFirestore) {
    this.commentsCollection = this.fireStore.collection('comments');
  }

  getComments(): Observable<Comment[]> {
    this.comments = this.commentsCollection.snapshotChanges().pipe(
      map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as Comment;
          data.id = action.payload.doc.id;
          return data;
        });
      }),
    );

    return this.comments;
  }

  addNewComment(comment: Comment) {
    this.commentsCollection.add(comment);
  }

  getComment(id: string): Observable<Comment> {
    this.commentDoc = this.fireStore.doc<Comment>(`comments/${id}`);
    this.comment = this.commentDoc
      .snapshotChanges()

      .pipe(
        map(action => {
          if (action.payload.exists === false) {
            return null;
          } else {
            const data = action.payload.data() as Comment;
            data.id = action.payload.id;
            return data;
          }
        }),
      );

    return this.comment;
  }

  updateComment(comment: Comment) {
    this.commentDoc = this.fireStore.doc(`comments/${comment.id}`);
    this.commentDoc.update(comment);
  }

  deleteComment(comment: Comment) {
    this.commentDoc = this.fireStore.doc(`comments/${comment.id}`);
    this.commentDoc.delete();
  }
}
