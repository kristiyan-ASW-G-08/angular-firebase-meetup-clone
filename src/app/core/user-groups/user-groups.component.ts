import { Component, OnInit } from '@angular/core';
import { GroupService } from 'src/app/services/group.service';
import { AuthService } from 'src/app/services/auth.service';
import Group from 'src/app/models/group';

@Component({
  selector: 'app-user-groups',
  templateUrl: './user-groups.component.html',
  styleUrls: ['./user-groups.component.scss'],
})
export class UserGroupsComponent implements OnInit {
  groups: Group[];
  constructor(
    private groupService: GroupService,
    private authService: AuthService,
  ) {}

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.groupService.getGroups().subscribe(groups => {
          //@ts-ignore
          this.groups = groups.filter(
            ({ organizer }) => organizer === auth.uid,
          );
        });
      }
    });
  }
}
