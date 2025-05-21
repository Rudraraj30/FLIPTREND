package com.example.fliptrend.repository;

import com.example.fliptrend.entity.Trend;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TrendRepository extends JpaRepository<Trend,Integer> {
}
