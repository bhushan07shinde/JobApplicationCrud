import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASIC_URL=["http://localhost:7070/"]
@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http: HttpClient) { }

  postJob(job : any):Observable<any>
  {
    return this.http.post(BASIC_URL+"jobs",job)
  }
  getAllJob():Observable<any>
  {
    return this.http.get(BASIC_URL+"jobs")
  }

  deletJob(id:number):Observable<any>
  {
    return this.http.delete(BASIC_URL+"jobs/"+id)
  }

  getJobById(id:number):Observable<any>{

    return this.http.get(BASIC_URL+"jobs/"+id)
  }

  updateJob(id:number,job:any):Observable<any>{

    return this.http.put(BASIC_URL+"jobs/"+id,job);
  }
}
