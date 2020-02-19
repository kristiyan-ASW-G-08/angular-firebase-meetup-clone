import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
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
import { EventFormComponent } from './core/event-form/event-form.component';
import { EventCardComponent } from './shared/event-card/event-card.component';
import { EventsComponent } from './core/events/events.component';
import { CategoryComponent } from './shared/category/category.component';
import { CategoryPageComponent } from './core/category-page/category-page.component';
import { GroupFormComponent } from './core/group-form/group-form.component';
import { GroupService } from './services/group.service';
import { GroupCardComponent } from './shared/group-card/group-card.component';
import { FooterComponent } from './core/footer/footer.component';
import { GroupsComponent } from './core/groups/groups.component';
import { GroupPageComponent } from './core/group-page/group-page.component';
import { CommentFormComponent } from './core/comment-form/comment-form.component';
import { CommentService } from './services/comment.service';
import { CommentComponent } from './shared/comment/comment.component';

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
    EventFormComponent,
    EventCardComponent,
    EventsComponent,
    CategoryComponent,
    CategoryPageComponent,
    GroupFormComponent,
    GroupCardComponent,
    FooterComponent,
    GroupsComponent,
    GroupPageComponent,
    CommentFormComponent,
    CommentComponent,
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
    FlashMessagesModule.forRoot(),
  ],
  providers: [EventService, AuthService, GroupService, CommentService],
  bootstrap: [AppComponent],
})
export class AppModule {}
