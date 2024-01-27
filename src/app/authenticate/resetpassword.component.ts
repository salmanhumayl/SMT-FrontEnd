import { Component, OnInit } from '@angular/core';
import { ForgetPasswordEmaiModel } from 'src/app/Model/ForgetPasswordEmaiModel';
import { AppService } from 'src/app/service/app.service';
import { ChangePasswordModel } from '../Model/ChangePasswordModel';
import { NotificationService } from '../service/notification.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html'
})
export class ResetpasswordComponent implements OnInit {

  lshowMessage:boolean=false;
  isLoading:boolean=false;
  token:string;
  message:String;

  ChangePasswordModel: ChangePasswordModel = new ChangePasswordModel();

  constructor(private SMTservice:AppService,
    private notify:NotificationService,
    private activeRouter:ActivatedRoute){

      
    //  alert(this.activeRouter.snapshot.params['token']);
    //  this.token=this.activeRouter.snapshot.params['token']
    //  alert(this.token)
     // alert(this.activeRouter.snapshot.paramMap.get('token'))
    
  }
  ngOnInit(): void {
    this.activeRouter.queryParams.subscribe(params => { 
      this.token = params['token'];
    });
    
  }
  changepasswordSubmit(){

    if (this.validate()) {
        this.isLoading=true;
        this.lshowMessage=false;
        this.ChangePasswordModel.token=this.token;
        this.SMTservice.resetpwd(this.ChangePasswordModel).subscribe((response:any)=>{
        
        if (response.status=="Success"){
        
            this.isLoading=false;
            this.message="Your Password has been Changed."
            this.ChangePasswordModel = new ChangePasswordModel();
            this.lshowMessage=true;
            
        }
        else
          {
            this.isLoading=false;
            this.message=response.message
            this.lshowMessage=true;
          }
        
        });
  }
  }

  validate() {
   
    if (!this.ChangePasswordModel.confirmPassword) {
      this.notify.showError("Confirm password is required");
      return false;
    }
    if (!this.ChangePasswordModel.newPassword) {
      this.notify.showError("New password is required");
      return false;
    }

    if (this.ChangePasswordModel.newPassword != this.ChangePasswordModel.confirmPassword) {
      this.notify.showError("New password and confirm password are not same");
      return false;
    }

    return true;
  }

}
