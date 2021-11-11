import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';



export const firebaseConfig = {
  apiKey: 'AIzaSyDCz8MLV9ltSfnLHT3__7faCFx9NzR7Ouo',
  authDomain: 'ionicapp-63140.firebaseapp.com',
  projectId: 'ionicapp-63140',
  storageBucket: 'ionicapp-63140.appspot.com',
  messagingSenderId: '515074306028',
  appId: '1:515074306028:web:c9a611dcee09d659615ac9'
};


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
    ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    SplashScreen,
    StatusBar,
    GooglePlus

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
