  import { Storage } from '@ionic/storage-angular';
  import { ChangeDetectorRef, Injectable } from '@angular/core';
  import { AngularFireAuth } from '@angular/fire/auth';
  import { BehaviorSubject, Observable } from 'rxjs';
  import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { TransitiveCompileNgModuleMetadata } from '@angular/compiler';
import { TextAttribute } from '@angular/compiler/src/render3/r3_ast';

  ;
  @Injectable({
  providedIn: 'root'
  })

  export class IonicAuthService {

  authState = new BehaviorSubject(false);
  private _storage: Storage | null = null;



  constructor(
    private angularFireAuth: AngularFireAuth,
    private storage: Storage,
    private router: Router,
    private platform: Platform,

  ) { 

    // this.platform.ready().then(() => {
    //   this.ifLoggedIn();
    // });

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

  signinUser(value) {
    return new Promise<any>((resolve, reject) => {

      this.angularFireAuth.auth.signInWithEmailAndPassword(value.email, value.password).then((response) => {

           this.storage.create();
           this.router.navigate(['home']);
           this.authState.next(true);
           
           this.storage?.set("token", response.user.l);

        })
    
      });
  }

  
  signoutUser() {

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

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    await this.storage.create();
  }
  
  userDetails() {

    return this.angularFireAuth.auth;
  }

  isAuthenticated() {
    return this.authState.value;
  }


  

  }