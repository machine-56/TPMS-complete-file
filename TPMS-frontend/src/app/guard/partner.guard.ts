import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';
import { VerificationService } from '../services/verification.service';

@Injectable({
  providedIn: 'root'
})
export class PartnerGuard implements CanActivate {
  constructor(private router:Router,private _auth:LoginService, private verify:VerificationService){}
  canActivate():boolean{
    if(this._auth.loggedIn() && this.verify.checkrolePtr()){
      return true
    }else{
      this.router.navigate(['']);
      return false;
    }
  }
  
}
