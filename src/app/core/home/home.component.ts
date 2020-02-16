import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Observable } from 'rxjs';
import categories from '../../shared/categories';
import Group from 'src/app/models/group';
import { GroupService } from 'src/app/services/group.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  categories = categories;
  events: Event[];
  groups: Group[];
  constructor(
    private eventService: EventService,
    private groupService: GroupService,
  ) {
    this.eventService.getEvents().subscribe(events => {
      //@ts-ignore
      this.events = events;
      console.log(events);
    });

    this.groupService.getGroups().subscribe(groups => {
      //@ts-ignore
      this.groups = groups;
      console.log(groups);
    });
  }

  ngOnInit() {}
}
