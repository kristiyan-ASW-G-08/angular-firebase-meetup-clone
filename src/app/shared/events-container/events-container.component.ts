import { Component, Input } from '@angular/core';
import Event from 'src/app/models/Event';
@Component({
  selector: 'app-events-container',
  templateUrl: './events-container.component.html',
  styleUrls: ['./events-container.component.scss'],
})
export class EventsContainerComponent {
  @Input() events: Event[];
  constructor() {}
}
