package com.example.Backend.Controller;

import com.example.Backend.Model.Destination;
import com.example.Backend.Model.Reservation;
import com.example.Backend.Model.Users;
import com.example.Backend.Service.DestinationServiceImplementation;
import com.example.Backend.Service.ReservationServiceImplementation;
import com.example.Backend.Service.UsersServiceImplementation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.Backend.DTO.ReservationRequest;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("/reservations")
public class ReservationController {
    @Autowired
    private UsersServiceImplementation usersServiceImplementation;

    @Autowired
    private ReservationServiceImplementation reservationServiceImplementation;

    @Autowired
    private DestinationServiceImplementation destinationServiceImplementation;

    @GetMapping("/available-destinations")
    public List<Destination> getAvailableDestinations(@RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate startDate,
                                                      @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate endDate) {
        return reservationServiceImplementation.getAvailableDestinations(startDate, endDate);
    }

//    @PostMapping("/add-reservation")
//    public ResponseEntity<?> addReservation(@RequestBody ReservationRequest reservationRequest) {
//        try {
//            reservationServiceImplementation.addReservation(reservationRequest);
//            return ResponseEntity.ok("Reservation added successfully");
//        } catch (Exception e) {
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error adding reservation");
//        }
//    }


    @GetMapping("/user/{email}")
    public List<Reservation> getReservationsByUser(@PathVariable String email) {
        return reservationServiceImplementation.getReservationsByEmail(email);
    }

    @PostMapping("/add")
    public void addReservation(@RequestBody ReservationRequest reservationRequest) {
        reservationServiceImplementation.addReservation(reservationRequest);
    }


}