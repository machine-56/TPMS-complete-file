import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VerificationService {

  user=localStorage.getItem('role')

  constructor() { }

  checkroleAdm(){
    if(this.user==='Admin'|| this.user==='superadmin'){
      return true;
    }else{
      return false;
    }
  }
  checkroleFin(){
    if(this.user==='Finance'){
      return true;
    }else{
      return false;
    }
  }
  checkrolePtr(){
    if(this.user==='Partner'){
      return true;
    }else{
      return false;
    }
  }

}
