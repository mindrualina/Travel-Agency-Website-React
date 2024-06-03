package com.example.Backend.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import jakarta.persistence.GeneratedValue;

import java.time.LocalDate;

@Data
@Entity
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long destinationId;
    private LocalDate startDate;
    private LocalDate endDate;
    private LocalDate bookingDate;
    private Double totalCost;

}
