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
  postitem:any[]=[]; 
  filepath:string="https://supermcxtip.com/viewfiles/";
  currentPage:number;
  noofpages:number;
  noOfItems:number;
  pageSize:number;
  

 // startIndex:number=0;
 // endIndex:number=15;
 // page:number=0;

  constructor(private AJESservice:AppService){
    
  }

  ngOnInit(): void {

 
  }

    onPageChange(page:number) : void {
      this.currentPage = page;
      this.showFeed(this.currentPage );
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
      return new Array(Math.ceil(length / 15));
    }

    updateIndex(pageindex:number){
      //alert(pageindex);
      if (pageindex >=0){
     // this.page=pageindex;
    //  this.startIndex=pageindex * 15;
    //  this.endIndex=this.startIndex +15;
      }
    }

    showFeed(pagenumber:number){
   
      this.loading=true;
       this.AJESservice.GetPost(pagenumber).subscribe((post)=>{
           var result=JSON.parse(JSON.stringify(post));
           this.postitem=result.data;
           this.currentPage=result.currentPage;
           this.noofpages=result.noOfPages;
           this.noOfItems=result.noOfItems;
           this.pageSize=result.pageSize;
                    
          this.loading=false;
       });
      }

    downloadfile(filename:string){
        alert(filename);
      }
   

      
  }

  

 

  
 

