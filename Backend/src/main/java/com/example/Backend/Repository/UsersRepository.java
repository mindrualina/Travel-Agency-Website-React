package com.example.Backend.Repository;

import com.example.Backend.Model.Users;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UsersRepository extends CrudRepository <Users, Long> {
    Users findByEmailAndPassword(String email, String password);

    Optional<Users> findByEmail(String email);
}
