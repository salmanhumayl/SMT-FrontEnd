import { Component,Input,Output,EventEmitter,ViewChild, AfterViewInit,OnInit } from '@angular/core';
import { PostlistComponent } from '../postlist/postlist.component';
import { AppService } from '../service/app.service';
import { Post } from '../Model/Post';

@Component({
  selector: 'app-posting',
  templateUrl: './posting.component.html',
  styleUrls: ['./posting.component.css']
})
export class PostingComponent implements OnInit,AfterViewInit {

  feedline: string;
  selectedFile: File;
  isLoading: boolean = false;
  //posts:Post[]=[]; 
  //currentPage:number;
  //totalPage:number;

  @ViewChild(PostlistComponent) list:PostlistComponent

  constructor(private AJESservice:AppService){
    
  }
  PostButtonClick(){
   // alert(this.feedline);

    this.isLoading=true;
    const formData=new FormData();
    formData.append("Post1", this.feedline);
    formData.append("document", this.selectedFile);

    this.AJESservice.PostDiscussion(formData).subscribe((response)=>{
      //  console.log(response);
         var result=JSON.parse(JSON.stringify(response));
         if (result.message=="ok"){
          this.list.showFeed(); 
          this.isLoading=false;
          this.feedline="";    
         }  
          });
   
 
}



chooseFile(event:any)
  {
      this.selectedFile =event.target.files[0];
     

  }
ngOnInit(): void {
}
 ngAfterViewInit() {
  this.list.showFeed();
}
 


 

}
 


