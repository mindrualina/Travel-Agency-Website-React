package com.example.Backend.Repository;

import com.example.Backend.Model.Destination;
import com.example.Backend.Model.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface ReservationRepository extends CrudRepository<Reservation, Long> {
    List<Reservation> findByDestinationAndStartDateLessThanEqualAndEndDateGreaterThanEqual(Destination destination, LocalDate startDate, LocalDate endDate);

    List<Reservation> findByUserId(Long userId);

}

