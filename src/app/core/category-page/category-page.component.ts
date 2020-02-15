import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss'],
})
export class CategoryPageComponent implements OnInit {
  category: string;
  events: Event[] = [];
  constructor(
    private route: ActivatedRoute,
    private eventService: EventService,
  ) {
    this.eventService.getEvents().subscribe(events => {
      //@ts-ignore
      this.events = events.filter(({ category }) => category === this.category);
    });
    console.log(this.events);
  }

  ngOnInit() {
    this.category = this.route.snapshot.paramMap.get('category');
  }
}
