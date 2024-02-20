import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from '../service/job.service';

@Component({
  selector: 'app-viewpage',
  templateUrl: './viewpage.component.html',
  styleUrl: './viewpage.component.css'
})
export class ViewpageComponent {
  
  jobarray:any = [];
  id: number = this.activateRoute.snapshot.params['jobid']
  constructor(private activateRoute: ActivatedRoute , private service: JobService,private fb:FormBuilder,
    private route:Router
    ){}


  ngOnInit()
  {
    this.getJob()
  }

  getJob()
  {
    this.service.getJobById(this.id).subscribe((res)=>{
      console.log(res);
      this.jobarray = res;
      console.log(this.jobarray)

    })
  }

  goBack()
  {
    this.route.navigateByUrl("/home")
  }
}
