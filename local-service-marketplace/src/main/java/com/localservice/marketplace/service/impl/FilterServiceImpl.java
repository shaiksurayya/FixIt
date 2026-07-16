package com.localservice.marketplace.service.impl;

import com.localservice.marketplace.dto.response.ProviderProfileResponseDTO;
import com.localservice.marketplace.dto.response.ServiceResponseDTO;
import com.localservice.marketplace.entity.ProviderProfile;
import com.localservice.marketplace.repository.ProviderProfileRepository;
import com.localservice.marketplace.repository.ServiceRepository;
import com.localservice.marketplace.service.FilterService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class FilterServiceImpl implements FilterService {

    private final ServiceRepository serviceRepository;
    private final ProviderProfileRepository providerProfileRepository;

    @Override
    public List<ServiceResponseDTO> getAvailableServicesByCategory(Long categoryId) {
        return serviceRepository.findByCategory_CategoryIdAndAvailabilityTrue(categoryId)
                .stream()
                .map(this::mapToServiceResponseDTO)
                .collect(Collectors.toList());
    }

    @Override
    public List<ServiceResponseDTO> getServicesByProvider(Long providerId) {
        return serviceRepository.findByProvider_ProviderId(providerId)
                .stream()
                .map(this::mapToServiceResponseDTO)
                .collect(Collectors.toList());
    }

    @Override
    public List<ServiceResponseDTO> getServicesByPriceRange(BigDecimal minPrice, BigDecimal maxPrice) {
        return serviceRepository.findByPriceBetween(minPrice, maxPrice)
                .stream()
                .map(this::mapToServiceResponseDTO)
                .collect(Collectors.toList());
    }

    @Override
    public List<ServiceResponseDTO> searchServices(String keyword) {
        return serviceRepository.findByTitleContainingIgnoreCase(keyword)
                .stream()
                .map(this::mapToServiceResponseDTO)
                .collect(Collectors.toList());
    }

    @Override
    public List<ProviderProfileResponseDTO> getProvidersByMinimumRating(BigDecimal rating) {
        return providerProfileRepository.findByAvgRatingGreaterThanEqual(rating)
                .stream()
                .map(this::mapToProviderResponseDTO)
                .collect(Collectors.toList());
    }

    @Override
    public List<ProviderProfileResponseDTO> getVerifiedProviders() {
        return providerProfileRepository.findByIsVerifiedTrue()
                .stream()
                .map(this::mapToProviderResponseDTO)
                .collect(Collectors.toList());
    }

    private ServiceResponseDTO mapToServiceResponseDTO(
            com.localservice.marketplace.entity.Service service) {

        return ServiceResponseDTO.builder()
                .serviceId(service.getServiceId())
                .providerId(service.getProvider().getProviderId())
                .providerName(service.getProvider().getUser().getName())
                .categoryId(service.getCategory().getCategoryId())
                .categoryName(service.getCategory().getName())
                .title(service.getTitle())
                .description(service.getDescription())
                .price(service.getPrice())
                .duration(service.getDuration())
                .availability(service.getAvailability())
                .createdAt(service.getCreatedAt())
                .build();
    }

    private ProviderProfileResponseDTO mapToProviderResponseDTO(ProviderProfile provider) {
        return ProviderProfileResponseDTO.builder()
                .providerId(provider.getProviderId())
                .userId(provider.getUser().getUserId())
                .userName(provider.getUser().getName())
                .experience(provider.getExperience())
                .description(provider.getDescription())
                .isVerified(provider.getIsVerified())
                .avgRating(provider.getAvgRating())
                .createdAt(provider.getCreatedAt())
                .build();
    }
}