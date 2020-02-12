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
import { ErrorMessageComponent } from './shared/error-message/error-message.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { EventService } from './services/event.service';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    ErrorMessageComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(
      environment.firebase,
      'angular-meetup-clone',
    ),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [EventService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
