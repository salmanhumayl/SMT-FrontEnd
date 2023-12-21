import { Component } from '@angular/core';
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
  
    if (this.lShowRegiter)
    {
      this.isLoading=true;
      this.lShowRegiter=false;
      this.SMTservice.UserRegistration(this.UserModel).subscribe((response:any)=>{
        console.log(response);
        if (response.status=="Error"){
          this.notify.showError(response.message);
          this.isLoading=false;
          this.lShowRegiter=true;
          return; 
        }
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
         console.log(resposne);
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
  
}
