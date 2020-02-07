import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/core/home/home.component';
import { LoginComponent } from '../app/core/login/login.component';
import { SignUpComponent } from '../app/core/sign-up/sign-up.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
