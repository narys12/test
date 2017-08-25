import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {

  user : firebase.User;

  constructor(public afAuth : AngularFireAuth) {
    this
      .afAuth
      .authState
      .subscribe((user) => {
        this.user = user
      })
  }

  isLoggedIn(): boolean {
    return this.user !== null;
  }

  login() {
    this
      .afAuth
      .auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this
      .afAuth
      .auth
      .signOut();
  }

}
