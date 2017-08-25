import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../providers/auth.service'
import * as firebase from 'firebase/app';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: Observable<firebase.User>
  userProfiles : FirebaseListObservable < any[] >;

  constructor(public database : AngularFireDatabase, public authService : AuthService) {
    this.userProfiles = database.list('/userProfiles', {
      query: {
        limitToLast: 50
      }
    })
    this.user = this.authService.afAuth.authState;
  }

  ngOnInit() {}

  save(name : string, email : string) {
    this
      .userProfiles
      .push({name: name, email: email})
  }

}
