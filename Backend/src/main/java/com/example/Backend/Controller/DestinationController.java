package com.example.Backend.Controller;

import com.example.Backend.Model.Destination;
import com.example.Backend.Service.DestinationServiceImplementation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import org.springframework.http.ResponseEntity;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/Destination")
public class DestinationController {

    @Autowired
    private DestinationServiceImplementation destinationServiceImplementation;

    @PostMapping("/Insert")
    public void insert(@RequestBody Destination destination){
        destinationServiceImplementation.insert(destination);
    }

    @GetMapping("/GetAll")
    public List<Destination> getAllDestinations() {
        return destinationServiceImplementation.getAllDestinations();
    }

    @GetMapping("/SearchDestinations")
    public ResponseEntity<List<Destination>> searchDestinations(@RequestParam String query) {
        List<Destination> destinations = destinationServiceImplementation.searchByTitle(query);
        if (destinations.isEmpty()) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.ok(destinations);
        }
    }


}
