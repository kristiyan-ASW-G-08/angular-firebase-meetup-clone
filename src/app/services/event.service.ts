import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import Event from 'src/app/models/Event';
import { map } from 'rxjs/operators';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  eventsCollection: AngularFirestoreCollection<Event>;
  eventDoc: AngularFirestoreDocument<Event>;
  events: Observable<Event[]>;
  event: Observable<Event>;
  constructor(private fireStore: AngularFirestore) {
    this.eventsCollection = this.fireStore.collection('events');
  }

  getEvents(): Observable<Event[]> {
    this.events = this.eventsCollection.snapshotChanges().pipe(
      map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as Event;
          data.id = action.payload.doc.id;
          return data;
        });
      }),
    );

    return this.events;
  }

  addNewEvent(event: Event) {
    this.eventsCollection.add(event);
  }

  getEvent(id: string): Observable<Event> {
    this.eventDoc = this.fireStore.doc<Event>(`events/${id}`);
    this.event = this.eventDoc.snapshotChanges().pipe(
      map(action => {
        if (action.payload.exists === false) {
          return null;
        } else {
          const data = action.payload.data() as Event;
          data.id = action.payload.id;
          return data;
        }
      }),
    );

    return this.event;
  }

  updateEvent(event: Event) {
    this.eventDoc = this.fireStore.doc(`events/${event.id}`);
    this.eventDoc.update(event);
  }

  deleteEvent(event: Event) {
    this.eventDoc = this.fireStore.doc(`events/${event.id}`);
    this.eventDoc.delete();
  }
}
