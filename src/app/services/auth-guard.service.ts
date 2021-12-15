import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { IonicAuthService} from '../ionic-auth.service'

@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanActivate {

  constructor( public IonicAuthService: IonicAuthService) { }

  canActivate(): boolean {
    return this.IonicAuthService.isAuthenticated();
  }
  
}