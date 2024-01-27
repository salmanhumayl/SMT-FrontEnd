import { Component, OnInit } from '@angular/core';
import { Userlist } from 'src/app/Model/userlist';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  loading:boolean=false 
  userlistitem:Userlist[]=[]; 
  
  constructor(private AJESservice:AppService){
  }

    ngOnInit(): void {
      this.userlist();
    }
    
    userlist(){
      this.loading=true;
       this.AJESservice.GetUsers().subscribe((users)=>{
         //  var result=JSON.parse(JSON.stringify(post));
             this.userlistitem=users;
           
          this.loading=false;
       });
      }
  }


