package com.example.Backend.Service;

import com.example.Backend.Model.Car;
import com.example.Backend.Resository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CarServiceImplementation {

    @Autowired
    private CarRepository carRepository;
    public void insert (Car car){
        carRepository.save(car);

    }
}
