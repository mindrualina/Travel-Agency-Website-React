package com.example.Backend.Service;

import com.example.Backend.DTO.LoginDTO;
import com.example.Backend.Model.Users;
import com.example.Backend.Repository.UsersRepository;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsersServiceImplementation {
    @Autowired
    private UsersRepository usersRepository;
    public void insert(Users users){
        usersRepository.save(users);
    }

    public void update(Users users){
        usersRepository.save(users);
    }

    public Users login(LoginDTO loginDTO){
        Users users = usersRepository.findByEmailAndPassword(loginDTO.getEmail() , loginDTO.getPassword());

        if (users != null){
            return users;
        }

        return null;

    }

}
