package com.localservice.marketplace.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ReviewResponseDTO {

    private Long reviewId;

    private Long bookingId;

    private Long customerId;

    private String customerName;

    private Long providerId;

    private String providerName;

    private Integer rating;

    private String comment;

    private LocalDateTime createdAt;
}