import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostJobComponent } from './components/post-job/post-job.component';
import { GetAllJobComponent } from './components/get-all-job/get-all-job.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UpdateJobComponent } from './components/update-job/update-job.component';
import { ViewpageComponent } from './viewpage/viewpage.component';

const routes: Routes = [
  {path:"addjobs",component:PostJobComponent},
  {path :"home",component:GetAllJobComponent},
  {path:"",component:HomepageComponent},
  {path:"home/addjobs/:jobid",component:UpdateJobComponent},
  {path:"home/view/:jobid",component:ViewpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
