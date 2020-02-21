import { Component, OnInit } from '@angular/core';
import { GroupService } from 'src/app/services/group.service';
import Group from 'src/app/models/group';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss'],
})
export class GroupsComponent implements OnInit {
  groups: Group[];
  constructor(private groupService: GroupService) {
    this.groupService.getGroups().subscribe(groups => {
      //@ts-ignore
      this.groups = groups;
      console.log(groups);
    });
  }

  ngOnInit() {}
}
