package com.example.Backend.Model;


import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Person {
    @Id
    private Long id;
    private String name;
    private Integer age;

    @OneToMany(fetch = FetchType.EAGER)
    private List<Car> cars;
}
