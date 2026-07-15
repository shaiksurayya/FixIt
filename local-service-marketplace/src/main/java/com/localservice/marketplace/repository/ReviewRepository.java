package com.localservice.marketplace.repository;

import com.localservice.marketplace.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Long> {

    List<Review> findByProvider_ProviderId(Long providerId);

    List<Review> findByCustomer_UserId(Long customerId);

    List<Review> findByBooking_BookingId(Long bookingId);
}