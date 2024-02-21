package Jobapplication.learnspringboot;
//JobController.java

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/jobs")
@CrossOrigin("*")

public class JobController {

	private List<Job> jobs = new ArrayList<>();
	@Autowired
	private JobService jobservice;

	@GetMapping
	public List<Job> getAllJobs() {
		
		
		return jobservice.getAllJob();
	}
	
	@GetMapping("/{id}")
	public Job getJobById(@PathVariable int id)
	{
		Job job = jobservice.getJobById(id);
		
		if(job==null)
		{
			return null;
		}
		
		return job;
	}

	@PostMapping
	public Job createJob(@RequestBody Job job) {
		
		jobservice.postJob(job);
		jobs.add(job);
		return job;
	}

	@PutMapping("/{id}")
	public void updateJob(@PathVariable int id, @RequestBody Job updatedJob) {
		
		Job jobexist = getJobById(id);
		
		if(jobexist == null)
		{
			
		}
		jobservice.updateJob(jobexist,updatedJob);
		
	}

	@DeleteMapping("/{id}")
	public void deleteJob(@PathVariable int id) {
		
		jobservice.deleteJob(id);
		
	}
}
