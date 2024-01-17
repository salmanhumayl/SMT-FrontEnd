import { Component } from '@angular/core';
import { ForgetPasswordEmaiModel } from 'src/app/Model/ForgetPasswordEmaiModel';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent {

  lshowMessage:boolean=false;
  isLoading:boolean=false;
  EmailAddress:string;
  model:ForgetPasswordEmaiModel;
  constructor(private SMTservice:AppService){

  }
  resetpassword(){
    this.isLoading=true;
    this.lshowMessage=false;

    this.model=new ForgetPasswordEmaiModel();
    this.model.EmailAddress=this.EmailAddress;
    this.EmailAddress="";


    this.SMTservice.forgetpwd(this.model).subscribe((response:any)=>{
      
      if (response.status=="Success"){
       
        this.isLoading=false;
        this.lshowMessage=true;
        
      }
     
     });
  }
}
