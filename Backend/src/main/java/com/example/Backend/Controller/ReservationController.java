package com.example.Backend.Controller;

import com.example.Backend.Model.Reservation;
import com.example.Backend.Service.DestinationServiceImplementation;
import com.example.Backend.Service.ReservationServiceImplementation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("/reservations")
public class ReservationController {

    @Autowired
    private ReservationServiceImplementation reservationServiceImplementation;

    @GetMapping("/check-availability")
    public ResponseEntity<Boolean> checkAvailability(@RequestParam Long destinationId,
                                                     @RequestParam String startDate,
                                                     @RequestParam String endDate) {
        LocalDate start = LocalDate.parse(startDate);
        LocalDate end = LocalDate.parse(endDate);
        boolean available = reservationServiceImplementation.isDestinationAvailable(destinationId, start, end);
        return ResponseEntity.ok(available);
    }

    @PostMapping("/make-reservation")
    public ResponseEntity<Reservation> makeReservation(@RequestBody Map<String, Object> payload) {
        Long destinationId = Long.valueOf(payload.get("destinationId").toString());
        LocalDate startDate = LocalDate.parse(payload.get("startDate").toString());
        LocalDate endDate = LocalDate.parse(payload.get("endDate").toString());
        Double costPerNight = Double.valueOf(payload.get("costPerNight").toString());

        Reservation reservation = reservationServiceImplementation.makeReservation(destinationId, startDate, endDate, costPerNight);
        return ResponseEntity.ok(reservation);
    }


}