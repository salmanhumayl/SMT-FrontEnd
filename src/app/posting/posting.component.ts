import { Component,Input,Output,EventEmitter,ViewChild } from '@angular/core';
import { PostlistComponent } from '../postlist/postlist.component';


@Component({
  selector: 'app-posting',
  templateUrl: './posting.component.html',
  styleUrls: ['./posting.component.css']
})
export class PostingComponent {

feedline: string;    // tsconfig.json and set "strictPropertyInitialization": false,
 @Output()
 postitem:EventEmitter<string>=new EventEmitter<string>;

@ViewChild(PostlistComponent) list:PostlistComponent


 PostButtonClick(){
  alert(this.feedline);
  this.list.showFeed();
  //this.postitem.emit(this.feedline);


 }



 

}
