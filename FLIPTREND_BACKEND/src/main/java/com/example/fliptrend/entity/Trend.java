package com.example.fliptrend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "Trend")
public class Trend {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "trendId")
    private Long trendId;

    @ManyToOne
    @JoinColumn(name = "managerId")
    private Trend manager;

    @Column(name = "trend_type")
    private String type;

    @Column(name = "title")
    private String title;

    @Column(name = "release_date")
    private LocalDate releaseDate;

    @Column(name = "duration")
    private Integer duration;

    @Column(name = "youtube_link")
    private String youtubeLink;

    @Column(name = "description")
    private String description;
}