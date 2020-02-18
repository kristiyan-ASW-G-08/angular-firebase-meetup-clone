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
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'groups/:groupId/event', component: EventFormComponent },
  { path: 'groups/:groupId/comment', component: EventFormComponent },
  { path: 'create/group', component: GroupFormComponent },
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
})
export class AppRoutingModule {}
