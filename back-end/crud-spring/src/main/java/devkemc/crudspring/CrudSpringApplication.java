package devkemc.crudspring;

import devkemc.crudspring.module.Course;
import devkemc.crudspring.repository.CourseRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class CrudSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudSpringApplication.class, args);
	}
	@Bean
	CommandLineRunner initDataBase(CourseRepository courseRepository){
		return args -> {
			courseRepository.deleteAll();
			for (int i = 0; i<10; i++){
				Course c = new Course();
				c.setName((i % 2 == 0) ? "Angular" : "Java");
				c.setCategory( (i % 2 == 0) ? "front-end" : "back-end");
				courseRepository.save(c);
			}

		};
	}
}
