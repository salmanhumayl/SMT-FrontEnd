import { Injectable } from '@angular/core';
import { UserInfo } from '../Model/userInfo';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isUserloggedin$=new BehaviorSubject(false);
  isWelComeName$=new BehaviorSubject('');

  constructor() { }

  public isAuthenticated(): boolean {
    return this.getToken() !== null;

  }

  storeToken(token: string) {
    localStorage.setItem("token", token);
  }

  storeTokenvalidity(token_validity: string) {
    localStorage.setItem("token_validity", token_validity);
  }

  

  getToken() {

     return localStorage.getItem("token"); // if empty return null
  }

  removeToken() {
     localStorage.removeItem("token");
  }

  getUserInfo() : UserInfo   {

    return JSON.parse(localStorage.getItem('currentUser') !);
  }

  StoreUserInfo(userinfo: UserInfo) {

    localStorage.setItem('currentUser', JSON.stringify(userinfo));
  }

  
  StoreAdminName(Name: string) {

    localStorage.setItem('admintoken', Name);
  }

  getAdminToken() {

    return localStorage.getItem('admintoken');  // if empty return null
 }


}
