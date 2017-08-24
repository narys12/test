import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userProfiles: FirebaseListObservable<any[]>;

  constructor(public db: AngularFireDatabase) {
    db.list('/userProfiles', { preserveSnapshot: true})
    .subscribe(snapshots=>{
        snapshots.forEach(snapshot => {
          console.log(snapshot.key, snapshot.val());
        });
    })
  }

  save(name: string, email: string) {
    console.log("name : " + name + " - email : " + email)
    this.userProfiles.push({name: name, email: email})
  }
}