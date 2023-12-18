import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { AuthenticationService } from '../service/authentication.service';
import { UserInfo } from '../Model/userInfo';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  dateTime:Date;
  currentUser: UserInfo;
  isUserloggedin: boolean = false;
  Name :string;

  constructor (private authService:AuthenticationService){}


 

 ngOnInit(): void {
  this.authService.isWelComeName$.subscribe(data => this.Name= data);
  this.authService.isUserloggedin$.subscribe(data => this.isUserloggedin= data);
    //this.dateTime=new Date();
    timer(0,1000).subscribe(()=>{
      this.dateTime=new Date()
    })

   
  }

  loggedout() {
    localStorage.removeItem('currentUser');
    this.authService.isUserloggedin$.next(false);
    this.authService.isWelComeName$.next('');
    
    window.location.href = 'home';

  }

}
