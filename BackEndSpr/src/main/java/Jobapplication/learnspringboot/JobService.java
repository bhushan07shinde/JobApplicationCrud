package Jobapplication.learnspringboot;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service

public class JobService {
	
	@Autowired
	private JobRepo jobrepo;
	
	@Autowired
	private CompantRepo comprepo;
	
	
	public Job postJob(Job job)
	{
		
		
		 CompanyDetails companyDetails = comprepo.findByCompanyname(job.getCompanydetails().getCompanyname());
	        if (companyDetails == null) {
	            // Company does not exist, create a new entry
	            companyDetails = new CompanyDetails();
	            companyDetails.setCompanyname(job.getCompanydetails().getCompanyname());
	            companyDetails = comprepo.save(companyDetails);
	        }
	        job.setCompanydetails(companyDetails);
	        
		return jobrepo.save(job);
	}
	
	
	public List<Job> getAllJob()
	{
		return jobrepo.findAll();
	}
	
	public void deleteJob(int id)
	{
		jobrepo.deleteById(id);
	}
	
	public Job getJobById(int id)
	{
		return jobrepo.findById(id).orElse(null);
	}

	
	
	
	   public String updateJob(Job jobupdate , Job job) {
//	        Job jobupdate = jobrepo.findById(job.getJobId()).orElse(null);

	        if (jobupdate != null) {
	            jobupdate.setLocation(job.getLocation());
	            jobupdate.setSalary(job.getSalary());
	            jobupdate.setSkills(job.getSkills());
	            jobupdate.setTitle(job.getTitle());
	            jobupdate.setType(job.getType());
	            jobupdate.setCompanydetails(job.getCompanydetails());

	            jobrepo.save(jobupdate);
	            return "Found";
	        }

	        return "Not found";
	    
	}
}
