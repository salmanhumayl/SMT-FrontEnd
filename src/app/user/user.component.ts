import { Component } from '@angular/core';
import { Utils } from 'src/app/helper/Utils';
import { AppService } from '../service/app.service';
import { UserModel } from '../Model/UserModel';
import { NotificationService } from '../service/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
lShowRegiter:boolean=true;
isLoading:boolean=false;
UserModel:UserModel=new UserModel();


constructor(private SMTservice:AppService,
            private notify:NotificationService,
            private router:Router ){

}

  Register ()
  {
  
    if (!this.validateFields())
    {
      this.lShowRegiter=true;
        return;
    }
    if (this.lShowRegiter)
    {
      this.isLoading=true;
      
      this.SMTservice.UserRegistration(this.UserModel).subscribe((response:any)=>{
        console.log(response);
        if (response.status=="Error"){
          this.notify.showError(response.message);
          this.isLoading=false;
          this.lShowRegiter=true;
          return; 
        }
        this.lShowRegiter=false;  
        this.UserModel.GenerateFactorCode=response.twoFactorCode;
        this.notify.showSuccess("Please enter the 4-digit code sent to your registered email address.");
        this.isLoading=false;
       });
    }

    else
    {
      if (this.UserModel.TwoFactorCode==null)
       {
        this.notify.showError("Pleaee Enter 4 digit code");
          return;
       }
       
       if (this.UserModel.TwoFactorCode!=this.UserModel.GenerateFactorCode)
       {
        this.notify.showError("Invalid Code");
        return;
       }

         this.isLoading=true;
        this.SMTservice.UserRegistration(this.UserModel).subscribe((resposne:any)=>{
       //  console.log(resposne);
         this.isLoading=false;
         this.router.navigate(['confirmation']);  
           });
      
    }
    
  }

  validateEmailOTP(){
    if (this.UserModel.TwoFactorCode==null)
    {
     this.notify.showError("Pleaee Enter 4 digit code");
       return;
    }
    
    if (this.UserModel.TwoFactorCode!=this.UserModel.GenerateFactorCode)
    {
     this.notify.showError("Invalid Code");
     return;
    }

      
    }


    validateFields(): boolean {

      if (!this.UserModel.Name) {
        this.notify.showError('Name required!');
        document.getElementById('Name')?.focus();
        return false;
      }
      else if (!this.UserModel.Email) {
        this.notify.showError('Email required!');
        document.getElementById('Email')?.focus();
        return false;
      }
      else if (!Utils.validateEmail(this.UserModel.Email)) {
        this.notify.showError('Email is not valid!');
        document.getElementById('Email')?.focus();
        return false;
      }
      else if (!this.UserModel.UserName) {
        this.notify.showError('UserName required!');
        document.getElementById('UserName')?.focus();
        return false;
      }
      else if (!this.UserModel.Password) {
        this.notify.showError('Password required!');
        document.getElementById('Password')?.focus();
        return false;
      }

      // else if (this.loginModel.password.length < 8) {
      //   //this.notify.showError('Password should be 8 character and contains alphabet and numbers!');
      //   document.getElementById('password')?.focus();
      //   return false;
      // }
      // else if (!this.loginModel.password.match('^((?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])|(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[^a-zA-Z0-9])|(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[^a-zA-Z0-9])|(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^a-zA-Z0-9])).{8,}')) {
      //  // this.notify.showError('Password should be 8 character and contains alphabet and numbers!');
      //   document.getElementById('password')?.focus();
      //   return false;
      // }
  
      return true;
    }
  
}
