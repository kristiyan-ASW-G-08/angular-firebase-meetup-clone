import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

//sacd1c21sc21c312cs12c
@Injectable()
export class AuthService {
  constructor(private firebaseAuth: AngularFireAuth) {}

  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.firebaseAuth.auth.signInWithEmailAndPassword(email, password).then(
        userData => resolve(userData),
        err => reject(err),
      );
    });
  }

  signUp(email: string, password: string, displayName: string) {
    return new Promise((resolve, reject) => {
      this.firebaseAuth.auth
        .createUserWithEmailAndPassword(email, password)
        .then(userData => {
          userData.user
            .updateProfile({
              displayName,
            })
            .then(
              userData => resolve(userData),
              err => reject(err),
            );
        });
    });
  }

  getAuth() {
    return this.firebaseAuth.authState;
  }

  logout() {
    this.firebaseAuth.auth.signOut();
  }
}
