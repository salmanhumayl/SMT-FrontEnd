import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostlistComponent } from './postlist/postlist.component';

const routes: Routes = [
  {path:'home',component:PostlistComponent},
    


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
