import { Component } from '@angular/core';
import { AppService } from '../service/app.service';
import { UserModel } from '../Model/UserModel';
import { NotificationService } from '../service/notification.service';

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
            private notify:NotificationService){

}

  Register ()
  {
  
    if (this.lShowRegiter)
    {
      this.isLoading=true;
      this.lShowRegiter=false;
      this.SMTservice.UserRegistration(this.UserModel).subscribe((resposne:any)=>{
      this.UserModel.GenerateFactorCode=resposne;
      this.notify.showSuccess("Please enter the 4 digit code sent to your registered email address.");
      console.log(resposne);
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
           });
      
    }
    
  }
}
