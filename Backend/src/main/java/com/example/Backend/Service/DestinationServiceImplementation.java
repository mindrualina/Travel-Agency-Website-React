package com.example.Backend.Service;

import com.example.Backend.Model.Destination;
import com.example.Backend.Model.Reservation;
import com.example.Backend.Repository.DestinationRepository;
import com.example.Backend.Repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.time.temporal.ChronoUnit;



@Service
public class DestinationServiceImplementation {
    @Autowired
    private DestinationRepository destinationRepository;
    public void insert (Destination destination){
        destinationRepository.save(destination);
    }
    public DestinationServiceImplementation(DestinationRepository destinationRepository) {
        this.destinationRepository = destinationRepository;
    }

    public List<Destination> getAllDestinations() {
        return (List<Destination>) destinationRepository.findAll();
    }

    public List<Destination> searchByTitle(String title) {
        return destinationRepository.findByTitleContainingIgnoreCase(title);
    }



}
