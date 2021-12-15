import { Component, OnInit } from '@angular/core';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { Storage } from '@ionic/storage-angular';


import * as firebase from 'firebase'
import { IonicAuthService } from '../ionic-auth.service';



    @Component({
      selector: 'app-welcome',
      templateUrl: './welcome.page.html',
      styleUrls: ['./welcome.page.scss'],
    })
    export class WelcomePage implements OnInit {

      numero:number[] = [1,2,3,4,5];
      userProfile: any = null;

      companies: any = 0;
      Component:Component;
      
      constructor(public navCtrl: NavController, private googlePlus: GooglePlus, private angularFireAuth: AngularFireAuth,ionicAuthService: IonicAuthService, private storage: Storage
        ) {
        var temp = this;
        setTimeout(function(){ 
                temp.companies =  5;
        }, 5000);

        firebase.auth().onAuthStateChanged( user => {
          if (user){
            this.userProfile = user;
          } else {
            this.userProfile = null;
          }
        });
      }

      loginUser(): void {
        this.googlePlus.login({
          'webClientId': 'AIzaSyBpnLeYR9Xf6Lfu8XAnX79crwI-d1fZcjU',
          'offline': true
        }).then( res => {
          firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
            .then( success => {
              console.log("Firebase success: " + JSON.stringify(success));
            })
            .catch( error => console.log("Firebase failure: " + JSON.stringify(error)));
          }).catch(err => console.error("Error: ", err));
      }
      
      ngOnInit() {

      }

    }
