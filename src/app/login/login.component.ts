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
        this.notify.showError("Invalid UserName or Password");
         form.reset();
         this.isLoading=false;
       }
       });


    
  }
}
