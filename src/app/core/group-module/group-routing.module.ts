import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventFormComponent } from '../event-form/event-form.component';

import { GroupPageComponent } from '../group-page/group-page.component';
import { CommentFormComponent } from '../comment-form/comment-form.component';
import { AuthGuard } from '../../guards/auth.guard';

export const routes: Routes = [
  {
    path: 'groups/:groupId/event',
    component: EventFormComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'groups/:groupId/comment',
    component: CommentFormComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'groups/:groupId',
    component: GroupPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class GroupRoutingModule {}
