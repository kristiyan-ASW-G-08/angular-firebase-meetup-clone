import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import Group from 'src/app/models/group';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss'],
})
export class CategoryPageComponent implements OnInit {
  category: string;
  events: Event[] = [];
  groups: Group[] = [];
  activeTab: 'groups' | 'events' = 'groups';
  constructor(
    private route: ActivatedRoute,
    private eventService: EventService,
    private groupService: GroupService,
  ) {
    this.eventService.getEvents().subscribe(events => {
      //@ts-ignore
      this.events = events.filter(({ category }) => category === this.category);
    });
    this.groupService.getGroups().subscribe(groups => {
      //@ts-ignore
      this.groups = groups.filter(({ category }) => category === this.category);
    });
  }

  ngOnInit() {
    this.category = this.route.snapshot.paramMap.get('category');
  }

  activateTab(tab: 'groups' | 'events') {
    this.activeTab = tab;
  }
}
