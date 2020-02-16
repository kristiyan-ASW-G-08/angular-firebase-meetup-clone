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
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'create/event', component: EventFormComponent },
  { path: 'create/group', component: GroupFormComponent },
  { path: 'events', component: EventsComponent },
  { path: 'groups', component: GroupsComponent },
  {
    path: 'categories/:category',
    component: CategoryPageComponent,
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
