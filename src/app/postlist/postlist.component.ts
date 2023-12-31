import { Component, Input, OnInit} from '@angular/core';
import { Post } from '../Model/Post';
import { AppService } from '../service/app.service';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit   {
  
  //@Input() postitem:Post[];
  //@Input() currentPage:number;
  //@Input() totalPages:number;

  loading = false;
  postitem:Post[]=[]; 
  filepath:string="https://supermcxtip.com/viewfiles/";
  currentPage:number;
  totalPage:number;

  startIndex:number=0;
  endIndex:number=10;
  page:number=0;

  constructor(private AJESservice:AppService){
    
  }

  ngOnInit(): void {}
    onPageChange(page:number) : void {
     // console.log(page);
    }

    onNextPage(): void {
      this.currentPage += 1;
      this.showFeed(this.currentPage);
    }

    onPreviousPage(): void {
      this.currentPage -= 1;
      this.showFeed(this.currentPage);
    
    }

    updatePage (page:number) :void{
    
    this.currentPage=page;
    this.showFeed(this.currentPage);
   
    }
    getArrayFromNumber(length:number){
     // alert(length);
    //  alert(Math.round(20 / 10));
     // let aa=new Array(length);
    //  return aa;
      return new Array(Math.ceil(length / 10));
    }

    updateIndex(pageindex:number){
      //alert(pageindex);
      if (pageindex >=0){
      this.page=pageindex;
      this.startIndex=pageindex * 10;
      this.endIndex=this.startIndex +10;
      }
    }

    showFeed(pagenumber:number=1){
      this.loading=true;
       this.AJESservice.GetPost(pagenumber).subscribe((post)=>{
         //  var result=JSON.parse(JSON.stringify(post));
             this.postitem=post;
             //this.currentPage=result.currentPage;
             //this.totalPage=result.noOfPages;
          //  console.log(post);
          //  console.log(this.postitem.length);
          this.loading=false;
       });
      }

      downloadfile(filename:string){
        alert(filename);
      }
   
  }

  

 

  
 

