package Jobapplication.learnspringboot;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface CompantRepo extends JpaRepository<CompanyDetails, Integer> {

    CompanyDetails findByCompanyname(String companyName);
}
