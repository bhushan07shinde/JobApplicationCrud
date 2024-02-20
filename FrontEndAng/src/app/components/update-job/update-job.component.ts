import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from '../../service/job.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-job',
  templateUrl: './update-job.component.html',
  styleUrl: './update-job.component.css'
})
export class UpdateJobComponent {

  id: number = this.activateRoute.snapshot.params['jobid']
  updateJobForm!: FormGroup;
  constructor(private activateRoute: ActivatedRoute , private service: JobService,private fb:FormBuilder
    ,private router:Router){}

  ngOnInit()
  {
    this.updateJobForm = this.fb.group({
      jobId : [null,Validators.required],
      title : [null,Validators.required],
      skills : [null,Validators.required],
      type : [null,Validators.required],
      location : [null,Validators.required],
      salary : [null,Validators.required],
      companydetails: this.fb.group({
        companyname: [null, Validators.required]
      })
    })
    this.getJobById();
  }

  getJobById()
  {
    this.service.getJobById(this.id).subscribe((res)=>{

      console.log(res);
      this.updateJobForm.patchValue(res)
    })
  }

  updateJob()
  {
    this.service.updateJob(this.id,this.updateJobForm.value).subscribe((res)=>{

      // console.log(res);
      this.router.navigateByUrl("/home")
      Swal.fire({
        title: "Details Updated Successfully",
        icon: "success"
      });

    })
  }
}

