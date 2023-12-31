import { Component } from '@angular/core';
import{NgForm} from '@angular/forms';
import { Route, Router} from '@angular/router';

import { loginmodel } from '../Model/loginmodel';
import { AppService } from '../service/app.service';
import { AuthenticationService } from '../service/authentication.service';
import { NotificationService } from '../service/notification.service';
import { UserInfo } from '../Model/userInfo';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLoading: boolean = false;
  LoginModel:loginmodel=new loginmodel();
  currentUser:UserInfo;

  constructor(private SMTservice:AppService,
              private notify:NotificationService,
              private authService:AuthenticationService,
              private router:Router ){}

  
  onSubmitlogin(form:NgForm){

    if (!this.validateFields()){
      return;
    }
    this.isLoading=true;
    this.SMTservice.Login(this.LoginModel).subscribe((response:any)=>{
   
      if (response.isSuccess==true){
        this.authService.StoreUserInfo(response.data);
        this.currentUser=this.authService.getUserInfo();
        this.authService.isUserloggedin$.next(true);
        this.authService.isWelComeName$.next(this.currentUser.name);
        this.isLoading=false;
        this.router.navigate(['home']);  
        
       }
       else{
      
        this.notify.showError(response.message);
         form.reset();
         this.isLoading=false;
       }
       });


    
  }

  validateFields(): boolean {

    if (!this.LoginModel.UserName) {
      this.notify.showError('User Name required!');
      document.getElementById('username')?.focus();
      return false;
    }
   
    else if (!this.LoginModel.Password) {
      this.notify.showError('Password required!');
      document.getElementById('password')?.focus();
      return false;
    }
  

    

    return true;
  }
}
