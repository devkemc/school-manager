package devkemc.crudspring.module;

import jakarta.persistence.*;
import lombok.Data;


@Data
@Entity
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(length = 50, nullable = false)
    private String name;
    @Column(length = 50, nullable = false)
    private String category;


}
