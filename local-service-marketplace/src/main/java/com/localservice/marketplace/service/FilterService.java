package com.localservice.marketplace.service;

import com.localservice.marketplace.dto.response.ProviderProfileResponseDTO;
import com.localservice.marketplace.dto.response.ServiceResponseDTO;

import java.math.BigDecimal;
import java.util.List;

public interface FilterService {

    List<ServiceResponseDTO> getAvailableServicesByCategory(Long categoryId);

    List<ServiceResponseDTO> getServicesByProvider(Long providerId);

    List<ServiceResponseDTO> getServicesByPriceRange(BigDecimal minPrice, BigDecimal maxPrice);

    List<ServiceResponseDTO> searchServices(String keyword);

    List<ProviderProfileResponseDTO> getProvidersByMinimumRating(BigDecimal rating);

    List<ProviderProfileResponseDTO> getVerifiedProviders();
}