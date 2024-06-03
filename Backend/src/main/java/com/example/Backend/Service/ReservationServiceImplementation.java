package com.example.Backend.Service;

import com.example.Backend.Model.Reservation;
import com.example.Backend.Repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class ReservationServiceImplementation {
    @Autowired
    private ReservationRepository reservationRepository;

    public boolean isDestinationAvailable(Long destinationId, LocalDate startDate, LocalDate endDate) {
        List<Reservation> reservations = reservationRepository.findByDestinationIdAndStartDateLessThanEqualAndEndDateGreaterThanEqual(destinationId, startDate, endDate);
        return reservations.isEmpty();
    }

    public Reservation makeReservation(Long destinationId, LocalDate startDate, LocalDate endDate, Double costPerNight) {
        if (!isDestinationAvailable(destinationId, startDate, endDate)) {
            throw new RuntimeException("Destination is not available for the selected dates.");
        }

        Reservation reservation = new Reservation();
        reservation.setDestinationId(destinationId);
        reservation.setStartDate(startDate);
        reservation.setEndDate(endDate);
        reservation.setBookingDate(LocalDate.now());
        reservation.setTotalCost(costPerNight * (startDate.until(endDate).getDays()));

        return reservationRepository.save(reservation);
    }
}
