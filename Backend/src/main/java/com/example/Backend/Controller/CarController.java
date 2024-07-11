package com.example.Backend.Controller;

import com.example.Backend.Model.Car;
import com.example.Backend.Service.CarServiceImplementation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/Car")
public class CarController {

    @Autowired
    private CarServiceImplementation carServiceImplementation;
    @PostMapping("/Insert")
    public void insert(@RequestBody Car car){
        carServiceImplementation.insert(car);

    }
}
