package com.localservice.marketplace.repository;

import com.localservice.marketplace.entity.Service;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.math.BigDecimal;
import java.util.List;

@Repository
public interface ServiceRepository extends JpaRepository<Service, Long> {

    List<Service> findByProvider_ProviderId(Long providerId);

    List<Service> findByCategory_CategoryId(Long categoryId);
    // Filter by category and available services
    List<Service> findByCategory_CategoryIdAndAvailabilityTrue(Long categoryId);

    // Filter by price range
    List<Service> findByPriceBetween(BigDecimal minPrice, BigDecimal maxPrice);

    // Search by title (case-insensitive)
    List<Service> findByTitleContainingIgnoreCase(String keyword);
}