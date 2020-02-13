import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  events: Event[];
  constructor(private eventService: EventService) {
    this.eventService.getEvents().subscribe(events => {
      //@ts-ignore
      this.events = events;
      console.log(events);
    });
  }

  ngOnInit() {}
}
