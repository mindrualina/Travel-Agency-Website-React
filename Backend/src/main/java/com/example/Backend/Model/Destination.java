package com.example.Backend.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

import java.util.Date;

@Data
@Entity
public class Destination {
    @Id
    private Long id;
    private String title;
    private String description;
    private Double pricePerNight;
    private Integer availableSlots;
    private String image;

}
