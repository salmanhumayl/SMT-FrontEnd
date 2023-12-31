import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostingComponent } from './posting/posting.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

const routes: Routes = [
  {path:'',component:PostingComponent,pathMatch:'full'},
  {path:'home',component:PostingComponent},
  {path:'register',component:UserComponent},
  {path:'login',component:LoginComponent},
  {path:'confirmation',component:ConfirmationComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
