package com.example.fliptrend.repository;

import com.example.fliptrend.entity.AppUser;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<AppUser,Integer> {
    AppUser findByUserName(String username);
}
