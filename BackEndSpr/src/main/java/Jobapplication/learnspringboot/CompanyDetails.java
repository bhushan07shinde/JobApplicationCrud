package Jobapplication.learnspringboot;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "company_Details")
public class CompanyDetails{
	
	
	
	

	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private int id;

	
	    private String companyname;


		public int getId() {
			return id;
		}


		public void setId(int id) {
			this.id = id;
		}


		public String getCompanyname() {
			return companyname;
		}


		public void setCompanyname(String companyname) {
			this.companyname = companyname;
		}
	    
	    

	    // Other fields

	    // Getters and setters
	}



