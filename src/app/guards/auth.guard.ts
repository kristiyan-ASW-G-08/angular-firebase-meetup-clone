import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs/Observable';
import { FlashMessagesService } from 'angular2-flash-messages';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private flashMessage: FlashMessagesService,
  ) {}

  canActivate(): Observable<boolean> {
    return this.afAuth.authState.map(auth => {
      if (!auth) {
        this.router.navigate(['/login']);
        this.flashMessage.show('Log in to perform this action', {
          cssClass: 'message is-danger has-text-centered',
          timeout: 4000,
        });
        return false;
      } else {
        return true;
      }
    });
  }
}
