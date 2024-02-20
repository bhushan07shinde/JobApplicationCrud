import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostJobComponent } from './components/post-job/post-job.component';
import { GetAllJobComponent } from './components/get-all-job/get-all-job.component';
import { UpdateJobComponent } from './components/update-job/update-job.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { HomepageComponent } from './homepage/homepage.component';
import { ViewpageComponent } from './viewpage/viewpage.component';

@NgModule({
  declarations: [
    AppComponent,
    PostJobComponent,
    GetAllJobComponent,
    UpdateJobComponent,
    HomepageComponent,
    ViewpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule ,
     FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
