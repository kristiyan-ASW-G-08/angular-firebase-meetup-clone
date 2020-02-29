import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupRoutingModule } from './group-routing.module';
import { CommentFormComponent } from '../comment-form/comment-form.component';
import { EventFormComponent } from '../event-form/event-form.component';
import { GroupPageComponent } from '../group-page/group-page.component';

@NgModule({
  declarations: [CommentFormComponent, EventFormComponent, GroupPageComponent],
  imports: [GroupRoutingModule],
})
export class GroupModuleModule {}
