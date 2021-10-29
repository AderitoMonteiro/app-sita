import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { UtilService } from './util.service';
import { menuController } from '@ionic/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app'




@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public isMenuEnabled:boolean = true;
  public selectedIndex = 0;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private util: UtilService,
    private router: Router,
  ) {

    var config = {
      apiKey: "AIzaSyC_q-B-EJ6F1MJhUHrd--Gu5Dq5xrtlcJ4",
      authDomain: "appeec-ef7e7.firebaseapp.com",
      projectId: "appeec-ef7e7",
      storageBucket: "appeec-ef7e7.appspot.com",
      messagingSenderId: "858490559757",
      appId: "1:858490559757:web:8ad3f86e65efe60faea444",
      measurementId: "G-HXJEHCC2GZ"
    };

    this.initializeApp();
    firebase.initializeApp(config);

  }

  initializeApp() {

    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  
  }

  ngOnInit() {
    this.selectedIndex = 1;
    
    this.util.getMenuState().subscribe(menuState => {
      this.isMenuEnabled = menuState;
    });
  }

  navigate(path, selectedId) {
    this.selectedIndex = selectedId;
    this.router.navigate([path]);
  }

  close() {
    menuController.toggle();
  }
}
