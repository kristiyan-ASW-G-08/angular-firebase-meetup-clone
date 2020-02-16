import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import group from 'src/app/models/group';
import { map } from 'rxjs/operators';
import 'rxjs/Rx';
import Group from 'src/app/models/group';

@Injectable({
  providedIn: 'root',
})
export class GroupService {
  groupCollection: AngularFirestoreCollection<Group>;
  groupDoc: AngularFirestoreDocument<Group>;
  groups: Observable<Group[]>;
  group: Observable<Group>;
  constructor(private fireStore: AngularFirestore) {
    this.groupCollection = this.fireStore.collection('groups');
  }

  getGroups(): Observable<Group[]> {
    this.groups = this.groupCollection.snapshotChanges().pipe(
      map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as Group;
          data.id = action.payload.doc.id;
          return data;
        });
      }),
    );

    return this.groups;
  }

  addNewGroup(group: Group) {
    this.groupCollection.add(group);
  }

  getGroup(id: string): Observable<Group> {
    this.groupDoc = this.fireStore.doc<Group>(`groups/${id}`);
    this.group = this.groupDoc
      .snapshotChanges()

      .pipe(
        map(action => {
          if (action.payload.exists === false) {
            return null;
          } else {
            const data = action.payload.data() as Group;
            data.id = action.payload.id;
            return data;
          }
        }),
      );

    return this.group;
  }

  updateGroup(group: Group) {
    this.groupDoc = this.fireStore.doc(`groups/${group.id}`);
    this.groupDoc.update(group);
  }

  deleteGroup(group: Group) {
    this.groupDoc = this.fireStore.doc(`groups/${group.id}`);
    this.groupDoc.delete();
  }
}
