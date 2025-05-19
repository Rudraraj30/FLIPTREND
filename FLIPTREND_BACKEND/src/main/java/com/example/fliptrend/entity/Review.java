package com.example.fliptrend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalTime;

@Entity
@Table(name = "Review")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long reviewId;

    @ManyToOne
    @JoinColumn(name = "trendId")
    private Trend trend;

    @ManyToOne
    @JoinColumn(name = "reviewerId")
    private AppUser reviewer;

    private Integer rating;
    private String review;

    @Column(name = "review_time")
    private LocalTime reviewTime;
}

