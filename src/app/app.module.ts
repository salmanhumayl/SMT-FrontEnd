import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PostlistComponent } from './postlist/postlist.component';
import { PostingComponent } from './posting/posting.component';
import { SidebannerComponent } from './sidebanner/sidebanner.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { ForgetpasswordComponent } from './authenticate/forgetpassword.component';
import { ResetpasswordComponent } from './authenticate/resetpassword.component';
import { PaginationComponent } from './pagination/pagination.component';
import { AdminLoginComponent } from './AdminPanel/admin-login/admin-login.component';
import { UserlistComponent } from './AdminPanel/users/userlist/userlist.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PostlistComponent,
    PostingComponent,
    SidebannerComponent,
    UserComponent,
    LoginComponent,
    ConfirmationComponent,
    ForgetpasswordComponent,
    ResetpasswordComponent,
    PaginationComponent,
    AdminLoginComponent,
    UserlistComponent
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 6500,
      positionClass: "toast-bottom-right",
      preventDuplicates: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
