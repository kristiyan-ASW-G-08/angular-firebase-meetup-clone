import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/core/home/home.component';
import { LoginComponent } from '../app/core/login/login.component';
import { SignUpComponent } from '../app/core/sign-up/sign-up.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { EventFormComponent } from './core/event-form/event-form.component';
import { EventsComponent } from './core/events/events.component';
import { CategoryPageComponent } from './core/category-page/category-page.component';
import { GroupFormComponent } from './core/group-form/group-form.component';
import { GroupsComponent } from './core/groups/groups.component';
import { GroupPageComponent } from './core/group-page/group-page.component';
import { CommentFormComponent } from './core/comment-form/comment-form.component';
import { AuthGuard } from './guards/auth.guard';
import { UserGroupsComponent } from './core/user-groups/user-groups.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
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
    path: 'user/groups',
    component: UserGroupsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'create/group',
    component: GroupFormComponent,
    canActivate: [AuthGuard],
  },
  { path: 'groups', component: GroupsComponent },
  { path: 'events', component: EventsComponent },
  { path: 'groups', component: GroupsComponent },
  {
    path: 'categories/:category',
    component: CategoryPageComponent,
  },
  {
    path: 'groups/:groupId',
    component: GroupPageComponent,
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
