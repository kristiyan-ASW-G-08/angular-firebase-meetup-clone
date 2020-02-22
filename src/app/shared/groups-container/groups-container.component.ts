import { Component, Input } from '@angular/core';
import Group from 'src/app/models/group';

@Component({
  selector: 'app-groups-container',
  templateUrl: './groups-container.component.html',
  styleUrls: ['./groups-container.component.scss'],
})
export class GroupsContainerComponent {
  @Input() groups: Group[];
  constructor() {}
}
