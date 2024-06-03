package com.example.Backend.Repository;

import com.example.Backend.Model.Destination;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;


import java.util.List;

@Repository
public interface DestinationRepository extends CrudRepository<Destination, Long> {
    List<Destination> findByTitleContainingIgnoreCase(String title);

}
