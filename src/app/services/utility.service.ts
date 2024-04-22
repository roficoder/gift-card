import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(private router:Router) { }

  removeAllProperties() :Boolean{
    localStorage.clear();
    return true
  }

  navigateTo(route:any){
    this.router.navigate([route])
  }

  getToken(){
    return localStorage.getItem('token')
  }

  login='/login'
  openLoginPopup(){
    this.router.navigate([this.login])
  }
}
