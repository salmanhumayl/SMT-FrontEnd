import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostingComponent } from './posting/posting.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { ForgetpasswordComponent } from './authenticate/forgetpassword.component';
import { ResetpasswordComponent } from './authenticate/resetpassword.component';
import { AdminLoginComponent } from './AdminPanel/admin-login/admin-login.component';
import { UserlistComponent } from './AdminPanel/users/userlist/userlist.component';

const routes: Routes = [
  {path:'',component:PostingComponent,pathMatch:'full'},
  {path:'home',component:PostingComponent},
  {path:'register',component:UserComponent},
  {path:'login',component:LoginComponent},
  {path:'confirmation',component:ConfirmationComponent},
  {path:'forgot-password',component:ForgetpasswordComponent},
  {path:'reset-password',component:ResetpasswordComponent},
  {path:'admin',component:AdminLoginComponent},
  {path:'admindashboard',component:UserlistComponent}
  
  

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
