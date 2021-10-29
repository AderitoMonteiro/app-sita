    import { Component, OnInit } from '@angular/core';
    import { GooglePlus } from '@ionic-native/google-plus';
  import { NavController } from '@ionic/angular';
    import firebase from 'firebase/compat/app';
    import 'firebase/compat/auth';
    import 'firebase/compat/firestore';


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
      
      constructor(public navCtrl: NavController, private googlePlus: GooglePlus) {
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
          'webClientId': '<Your web client ID>',
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
