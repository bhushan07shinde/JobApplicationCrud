package Jobapplication.learnspringboot;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

@Repository

public interface JobRepo extends JpaRepository<Job, Integer>{

}
