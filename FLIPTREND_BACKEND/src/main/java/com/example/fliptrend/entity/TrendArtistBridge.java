package com.example.fliptrend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "Trend_Artist_Bridge")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TrendArtistBridge {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long uId;

    @ManyToOne
    @JoinColumn(name = "trendId")
    private Trend trend;

    @ManyToOne
    @JoinColumn(name = "artistId")
    private Artist artist;
}
