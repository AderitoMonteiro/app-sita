import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { IonicAuthService} from '../ionic-auth.service';
import {take, map,tap} from 'rxjs/operators';
import { Storage } from '@ionic/storage-angular';

import {
  Observable
} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanActivate {

  constructor(private authService: IonicAuthService, private router: Router, private storage: Storage,
   ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

   
     return this.storage.get("token").then((token) => {

       console.log("texto"+token);

         if (token != null) {

            return true;
            
         } else {

            return this.router.createUrlTree(['/login']);
         }
               
      });  
     
  }
  
}