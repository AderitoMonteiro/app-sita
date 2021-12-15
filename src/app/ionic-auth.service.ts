  import { Storage } from '@ionic/storage-angular';
  import { Injectable } from '@angular/core';
  import { AngularFireAuth } from '@angular/fire/auth';
  import { BehaviorSubject, Observable } from 'rxjs';
  import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { Platform } from '@ionic/angular';

  ;
  @Injectable({
  providedIn: 'root'
  })

  export class IonicAuthService {

  authState = new BehaviorSubject(false);


  constructor(
    private angularFireAuth: AngularFireAuth,
    private storage: Storage,
    private router: Router,
    private platform: Platform,

  ) { 

    this.platform.ready().then(() => {
      this.ifLoggedIn();
    });

  }

      // canActivate: [IonicAuthService] 

  

  createUser(value) {
    
    return new Promise<any>((resolve, reject) => {
      this.angularFireAuth.auth.createUserWithEmailAndPassword(value.email, value.password)
        .then(
          res => resolve(res),
          err => reject(err));
    });
  }

  // signinUser(value) {
  //   return new Promise<any>((resolve, reject) => {

  //     this.angularFireAuth.auth.signInWithEmailAndPassword(value.email, value.password)
  //       // .then((response) => {

  //       //    this.storage.create();
  //       //   // this.errorMsg = "";
  //       //    this.storage.set('token',response.user.l).then((response) => {
  //       //     this.router.navigate(['home']);
  //       //     this.authState.next(true);
  //       //   });
          
  //       //   })
        
  //       // then(
  //       //   res => resolve(res),err => reject(err));
  //       //   this.storage.create();
          
  //       });
  // }

  ifLoggedIn() {
    this.storage.get('token').then((response) => {
      if (response) {
        this.authState.next(true);
      }
    });
  }
  
  signoutUser() {

    // this.storage.clear();
    return new Promise<void>((resolve, reject) => {
      if (this.angularFireAuth.auth.currentUser) {
        this.angularFireAuth.auth.signOut()
          .then(() => {
            console.log('Sign out');
            resolve();
          }).catch(() => {
            reject();
          });
      }
    });
  }

  userDetails() {

    return this.angularFireAuth.auth;
  }

  isAuthenticated() {
    return this.authState.value;
  }

  }