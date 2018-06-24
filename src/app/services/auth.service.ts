import { Injectable } from '@angular/core';


// 
import { AngularFireAuth } from 'angularfire2/auth';
import { auth, User } from 'firebase';

import {  AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from "angularfire2/firestore";
import {  Observable } from "rxjs";
//import { AngularFirestore } from "angularfire2/firestore";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private itemDoc: AngularFirestoreCollection<any>;
  item: Observable<any>;

  user: any = {};
  //
  constructor(public afAuth: AngularFireAuth, private _db:AngularFirestore ) {
    this.afAuth.authState.subscribe (user => {
      if(!user){
        return;
      } else { 
        let user2 = {};
        this.user.nombre = user.displayName ;
        this.user.uid = user.uid;
        this.user.image = user.photoURL;
        console.log(this.user);
        
        user2 = this.user;
        this.itemDoc = _db.collection<any>('users');
        this.itemDoc.add({user2});
        this.itemDoc.doc(String(user.uid)).set(this.user);
      }
    })
  }
  login() {
    let provider = new auth.GoogleAuthProvider();  // Para logeo con otro proveedor 
    this.afAuth.auth.signInWithPopup(provider).then(user => {  // Promise 
      console.log(user);
    }).catch (error => {   // to catch error if the promise does not work 
      console.log(error);
    });
  }
  logout() {
    this.afAuth.auth.signOut();
  }
}
