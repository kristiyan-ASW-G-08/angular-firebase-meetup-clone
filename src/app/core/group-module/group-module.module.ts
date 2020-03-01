import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupRoutingModule } from './group-routing.module';
import { CommentFormComponent } from '../comment-form/comment-form.component';
import { EventFormComponent } from '../event-form/event-form.component';
import { GroupPageComponent } from '../group-page/group-page.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EventsContainerComponent } from 'src/app/shared/events-container/events-container.component';
import { CommentComponent } from 'src/app/shared/comment/comment.component';
import { EventCardComponent } from 'src/app/shared/event-card/event-card.component';

@NgModule({
  declarations: [
    CommentFormComponent,
    EventFormComponent,
    GroupPageComponent,
    EventsContainerComponent,
    CommentComponent,
    EventCardComponent,
  ],
  imports: [
    CommonModule,

    GroupRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
  ],
  exports: [EventsContainerComponent, GroupRoutingModule],
})
export class GroupModuleModule {}
