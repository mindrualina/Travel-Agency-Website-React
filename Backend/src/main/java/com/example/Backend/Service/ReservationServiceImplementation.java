package com.example.Backend.Service;

import com.example.Backend.Model.Destination;
import com.example.Backend.Model.Reservation;
import com.example.Backend.Model.Users;
import com.example.Backend.Repository.DestinationRepository;
import com.example.Backend.Repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Backend.Repository.UsersRepository;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;
import com.example.Backend.DTO.ReservationRequest;

@Service
public class ReservationServiceImplementation {
    @Autowired
    private ReservationRepository reservationRepository;

    @Autowired
    DestinationRepository destinationRepository;

    @Autowired
    private UsersRepository usersRepository;

    public List<Destination> getAvailableDestinations(LocalDate startDate, LocalDate endDate) {
        List<Destination> allDestinations = StreamSupport
                .stream(destinationRepository.findAll().spliterator(), false)
                .collect(Collectors.toList());

        List<Destination> availableDestinations = allDestinations.stream()
                .filter(destination -> {
                    List<Reservation> reservations = reservationRepository.findByDestinationAndStartDateLessThanEqualAndEndDateGreaterThanEqual(destination, endDate, startDate);
                    return reservations.isEmpty();
                })
                .collect(Collectors.toList());

        return availableDestinations;
    }

//    public void addReservation(ReservationRequest reservationRequest) {
//        Destination destination = destinationRepository.findById(reservationRequest.getDestinationId())
//                .orElseThrow(() -> new RuntimeException("Destination not found"));
//
//        LocalDate bookingDate = LocalDate.now();
//        long daysBetween = ChronoUnit.DAYS.between(reservationRequest.getStartDate(), reservationRequest.getEndDate());
//        double totalCost = daysBetween * destination.getPricePerNight();
//
//        Reservation reservation = new Reservation();
//        reservation.setDestination(destination);
//        reservation.setStartDate(reservationRequest.getStartDate());
//        reservation.setEndDate(reservationRequest.getEndDate());
//        reservation.setBookingDate(bookingDate);
//        reservation.setTotalCost(totalCost);
//
//        reservationRepository.save(reservation);
//    }

    public void addReservation(ReservationRequest reservationRequest) {

        Destination destination = destinationRepository.findById(reservationRequest.getDestinationId())
                .orElseThrow(() -> new RuntimeException("Destination not found"));


        Users user = usersRepository.findByEmail(reservationRequest.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));


        LocalDate bookingDate = LocalDate.now();
        long daysBetween = ChronoUnit.DAYS.between(reservationRequest.getStartDate(), reservationRequest.getEndDate());
        double totalCost = daysBetween * destination.getPricePerNight();


        Reservation reservation = new Reservation();
        reservation.setDestination(destination);
        reservation.setUser(user);
        reservation.setStartDate(reservationRequest.getStartDate());
        reservation.setEndDate(reservationRequest.getEndDate());
        reservation.setBookingDate(bookingDate);
        reservation.setTotalCost(totalCost);

        reservationRepository.save(reservation);
    }


    public List<Reservation> getReservationsByEmail(String email) {
        Users user = usersRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        return reservationRepository.findByUserId(user.getId());
    }
}
