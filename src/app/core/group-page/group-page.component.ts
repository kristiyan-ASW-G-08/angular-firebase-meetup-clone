import { Component, OnInit } from '@angular/core';
import { GroupService } from 'src/app/services/group.service';
import Group from 'src/app/models/group';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-group-page',
  templateUrl: './group-page.component.html',
  styleUrls: ['./group-page.component.scss'],
})
export class GroupPageComponent implements OnInit {
  isOrganizer: boolean = false;
  isAuth: boolean = false;
  group: Group;
  imageUrl: string;
  activeTab: 'information' | 'events' | 'comments' = 'information';
  events: Event[];
  constructor(
    private groupService: GroupService,
    private route: ActivatedRoute,
    private authService: AuthService,
    private eventsService: EventService,
  ) {
    const groupId = this.route.snapshot.paramMap.get('groupId');
    this.groupService.getGroup(groupId).subscribe(group => {
      //@ts-ignore
      this.group = group;
      this.imageUrl = group.imageUrl;
      this.authService.getAuth().subscribe(auth => {
        if (auth) {
          this.isOrganizer = this.group.organizer === auth.uid;
          this.isAuth = true;
        }
      });

      this.eventsService.getEvents().subscribe(events => {
        console.log(events);
        //@ts-ignore
        this.events = events.filter(event => this.group.id === event.group);
      });
    });
  }

  ngOnInit() {}

  activateTab(tab: 'information' | 'events' | 'comments') {
    this.activeTab = tab;
  }
}
