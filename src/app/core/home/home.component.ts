import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Observable } from 'rxjs';
import categories from '../../shared/categories';
import Group from 'src/app/models/group';
import { GroupService } from 'src/app/services/group.service';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  categories = categories;
  events: Event[];
  groups: Group[];
  isAuth: boolean;
  constructor(
    private eventService: EventService,
    private groupService: GroupService,
    private authService: AuthService,
  ) {
    this.eventService.getEvents().subscribe(events => {
      //@ts-ignore
      this.events = events.slice(0, 4);

    });

    this.groupService.getGroups().subscribe(groups => {
      //@ts-ignore
      this.groups = groups.slice(0, 4);
    
    });

    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.isAuth = true;
      } else {
        this.isAuth = false;
      }
      console.log(this.isAuth);
    });
  }

  ngOnInit() {}
}
