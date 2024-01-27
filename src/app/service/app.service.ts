import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { Post } from '../Model/Post';
import { loginmodel } from '../Model/loginmodel';
import { UserModel } from '../Model/UserModel';
import { ForgetPasswordEmaiModel } from '../Model/ForgetPasswordEmaiModel';
import { ChangePasswordModel } from '../Model/ChangePasswordModel';
import { Userlist } from '../Model/userlist';



@Injectable({
  providedIn: 'root'
})
export class AppService {
  private domain :string | undefined;

  constructor(private _http:HttpClient) {
    this.domain=environment.domain;
   }

   PostDiscussion(formData:FormData):Observable<string>{

    return this._http.post<string>(this.domain + "api/PostFeed/AddPost",formData)   
    .pipe(
      retry(2), catchError(this.handleError)
   
   );
   }

    GetPost(pagenumber:number=1):Observable<Post[]>{
  
    return this._http.get<Post[]>(this.domain + "api/PostFeed/GetPostInclude") 
    .pipe(
        
          catchError(this.handleError)
    
    );
    
    
    
  }
  
  GetUsers():Observable<Userlist[]>{
  
    return this._http.get<Userlist[]>(this.domain + "api/Authenticate/GetUsers") 
    .pipe(
        
          catchError(this.handleError)
    
    );
    
    
    
  }
  
  UserRegistration (model :UserModel) :Observable<any> {
    return this._http.post<any>(this.domain + "api/Authenticate/UserRegistration",model)
  
  }

  Login (model :loginmodel) :Observable<any> {
    return this._http.post<any>(this.domain + "api/Authenticate/Login",model)
  
  }


  AdminLoginIn (model :loginmodel) :Observable<any> {
    
    return this._http.post<any>(this.domain + "api/Authenticate/AdminLoginIn",model)
  
  }

  forgetpwd (model :ForgetPasswordEmaiModel) :Observable<any> {
    
    //return this._http.post<any>(`${this.domain}api/Authenticate/forgetpwd/${EmailAddress}`,'',)
  
    return this._http.post<any>(this.domain + "api/Authenticate/forgetpwd",model)
  
  }

  resetpwd (model :ChangePasswordModel) :Observable<any> {
   
    //return this._http.post<any>(`${this.domain}api/Authenticate/forgetpwd/${EmailAddress}`,'',)
  
    return this._http.post<any>(this.domain + "api/Authenticate/forgetpwdupdate",model)
  
  }



   private handleError(error:HttpErrorResponse){
    if (error.error instanceof Error) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError(error);
  
  }
}
