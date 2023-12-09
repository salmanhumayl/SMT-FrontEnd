import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 dateTime:Date;

 ngOnInit(): void {
    //this.dateTime=new Date();
    timer(0,1000).subscribe(()=>{
      this.dateTime=new Date()
    })
  }
}
