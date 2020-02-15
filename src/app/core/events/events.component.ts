import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
})
export class EventsComponent implements OnInit {
  events: Event[];
  constructor(private eventService: EventService) {
    this.eventService.getEvents().subscribe(events => {
      //@ts-ignore
      this.events = events;
    });
  }

  ngOnInit() {}
}
