import { Component ,ViewEncapsulation} from '@angular/core';
import { JobService } from '../../service/job.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PostJobComponent {

  postJobForm!:FormGroup 
  constructor(private jobService:JobService, private fb:FormBuilder,private router:Router)
  {
     
  }

  ngOnInit()
  {
    this.postJobForm = this.fb.group({
      // jobid : [null,Validators.required],
      title : [null,Validators.required],
      skills : [null,Validators.required],
      type : [null,Validators.required],
      location : [null,Validators.required],
      salary : [null,Validators.required],
      companydetails: this.fb.group({
        companyname: [null, Validators.required]
      })
    })
  }
  postJob()
  {
    //console.log(this.postJobForm.value)
    this.jobService.postJob(this.postJobForm.value).subscribe((res)=>
    {
      console.log(res);
      this.router.navigateByUrl("/home");
      Swal.fire({
        title: "Details Saved Successfully",
        icon: "success"
      });
    })
  }
}
