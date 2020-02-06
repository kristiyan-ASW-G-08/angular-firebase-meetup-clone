import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeroComponent } from './core/hero/hero.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeComponent } from './core/home/home.component';
import { LoginComponent } from './core/login/login.component';
import { SignUpComponent } from './core/sign-up/sign-up.component';
import { CenterSectionComponent } from './share/center-section/center-section.component';
import { ErrorMessageComponent } from './shared/error-message/error-message.component';
import { ConfirmPasswordDirective } from './validators/confirm-password/confirm-password.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    CenterSectionComponent,
    ErrorMessageComponent,
    ConfirmPasswordDirective,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
