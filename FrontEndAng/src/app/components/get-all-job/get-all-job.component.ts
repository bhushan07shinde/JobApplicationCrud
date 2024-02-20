import { Component } from '@angular/core';
import { JobService } from '../../service/job.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-get-all-job',
  templateUrl: './get-all-job.component.html',
  styleUrl: './get-all-job.component.css'
})
export class GetAllJobComponent {

  jobarray: any = [];
  constructor(private service:JobService){}

  ngOnInit()
  {
    this.getAllJobs()
  }

  getAllJobs()
  {
    this.service.getAllJob().subscribe((res)=>{
      console.log(res)
      this.jobarray = res;
    })
  }

  deleteJob(id:number)
  {
    console.log(id);
    this.service.deletJob(id).subscribe((res)=>{
        console.log(res);
        this.getAllJobs();

        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 2500,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });
        Toast.fire({
          icon: "success",
          title: "Deleted successfully"
        });
    });
  }

}
