import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { loginmodel } from 'src/app/Model/loginmodel';
import { UserInfo } from 'src/app/Model/userInfo';
import { AppService } from 'src/app/service/app.service';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  isLoading:boolean=false;
  LoginModel:loginmodel=new loginmodel();
  currentUser:UserInfo;

  constructor(private SMTservice:AppService,
    private notify:NotificationService,
    private authService:AuthenticationService,
    private router:Router ){}

  onSubmitlogin(form:NgForm){
    this.isLoading=true;
    this.SMTservice.AdminLoginIn(this.LoginModel).subscribe((response:any)=>{
   
      if (response.isSuccess==true){

        this.authService.StoreUserInfo(response.data);
        this.currentUser=this.authService.getUserInfo();
        this.authService.isUserloggedin$.next(true);
        this.authService.isWelComeName$.next(this.currentUser.name);
        this.isLoading=false;
        this.router.navigate(['admindashboard']);  
        
       }
       else{
      
        this.notify.showError(response.message);
         form.reset();
         this.isLoading=false;
       }
       });

  }
}
