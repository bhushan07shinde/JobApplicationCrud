package Jobapplication.learnspringboot;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Table;
import jakarta.persistence.OneToOne;
@Entity
@Table(name="Job")
public class Job {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int jobId;
	
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="company_id")
	private CompanyDetails companydetails;
	
	
	private String title;
	private String type;
	private String skills;
	private String location;
	private long salary;

	public int getJobId() {
		return jobId;
	}

	public void setJobId(int jobId) {
		this.jobId = jobId;
	}

//	public int getCompanyid() {
//		return companyid;
//	}
//
//	public void setCompanyid(int companyid) {
//		this.companyid = companyid;
//	}
	
	

	public String getTitle() {
		return title;
	}

	public CompanyDetails getCompanydetails() {
		return companydetails;
	}

	public void setCompanydetails(CompanyDetails companydetails) {
		this.companydetails = companydetails;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getSkills() {
		return skills;
	}

	public void setSkills(String skills) {
		this.skills = skills;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public long getSalary() {
		return salary;
	}

	public void setSalary(long salary) {
		this.salary = salary;
	}

	// Constructors, getters, and setters

}
