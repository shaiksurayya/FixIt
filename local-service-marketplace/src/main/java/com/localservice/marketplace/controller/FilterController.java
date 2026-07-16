package com.localservice.marketplace.controller;

import com.localservice.marketplace.dto.response.ProviderProfileResponseDTO;
import com.localservice.marketplace.dto.response.ServiceResponseDTO;
import com.localservice.marketplace.service.FilterService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.math.BigDecimal;
import java.util.List;

@RestController
@RequestMapping("/api/filter")
@RequiredArgsConstructor
public class FilterController {

    private final FilterService filterService;

    @GetMapping("/category/{categoryId}")
    public ResponseEntity<List<ServiceResponseDTO>> getAvailableServicesByCategory(@PathVariable Long categoryId) {
        return ResponseEntity.ok(filterService.getAvailableServicesByCategory(categoryId));
    }

    @GetMapping("/provider/{providerId}")
    public ResponseEntity<List<ServiceResponseDTO>> getServicesByProvider(@PathVariable Long providerId) {
        return ResponseEntity.ok(filterService.getServicesByProvider(providerId));
    }

    @GetMapping("/price")
    public ResponseEntity<List<ServiceResponseDTO>> getServicesByPriceRange(@RequestParam BigDecimal minPrice,
                                                                             @RequestParam BigDecimal maxPrice) {
        return ResponseEntity.ok(filterService.getServicesByPriceRange(minPrice, maxPrice));
    }

    @GetMapping("/search")
    public ResponseEntity<List<ServiceResponseDTO>> searchServices(@RequestParam String keyword) {
        return ResponseEntity.ok(filterService.searchServices(keyword));
    }

    @GetMapping("/providers/rating/{rating}")
    public ResponseEntity<List<ProviderProfileResponseDTO>> getProvidersByMinimumRating(@PathVariable BigDecimal rating) {
        return ResponseEntity.ok(filterService.getProvidersByMinimumRating(rating));
    }

    @GetMapping("/providers/verified")
    public ResponseEntity<List<ProviderProfileResponseDTO>> getVerifiedProviders() {
        return ResponseEntity.ok(filterService.getVerifiedProviders());
    }
}