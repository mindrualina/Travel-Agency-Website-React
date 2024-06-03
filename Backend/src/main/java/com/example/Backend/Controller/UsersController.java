package com.example.Backend.Controller;

import com.example.Backend.Model.Users;
import com.example.Backend.Service.UsersServiceImplementation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;

import com.example.Backend.DTO.LoginDTO;



@RestController
@CrossOrigin
@RequestMapping("/Users")
public class UsersController {
    @Autowired
    private UsersServiceImplementation usersServiceImplementation;
    @PostMapping("/Insert")
    public void insert(@RequestBody Users users){
        usersServiceImplementation.insert(users);
    }

    @PostMapping("/Update")
    public void update(@RequestBody Users users){
        usersServiceImplementation.update(users);
    }

    @PostMapping("/Login")
    public ResponseEntity Login(@RequestBody LoginDTO loginDTO){
        return ResponseEntity.ok().body(usersServiceImplementation.login(loginDTO));
    }

    @PostMapping("/SignUp")
    public ResponseEntity<?> SignUp(@RequestBody Users newUser) {
        try {
            usersServiceImplementation.insert(newUser);
            return ResponseEntity.ok("User registered successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to register user: " + e.getMessage());
        }

    }





}
