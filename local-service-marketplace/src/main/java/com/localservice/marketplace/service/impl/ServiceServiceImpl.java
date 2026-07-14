package com.localservice.marketplace.service.impl;

import com.localservice.marketplace.dto.request.ServiceRequestDTO;
import com.localservice.marketplace.dto.response.ServiceResponseDTO;
import com.localservice.marketplace.entity.Category;
import com.localservice.marketplace.entity.ProviderProfile;
import com.localservice.marketplace.repository.CategoryRepository;
import com.localservice.marketplace.repository.ProviderProfileRepository;
import com.localservice.marketplace.repository.ServiceRepository;
import com.localservice.marketplace.service.ServiceService;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class ServiceServiceImpl implements ServiceService {

    private final ServiceRepository serviceRepository;
    private final ProviderProfileRepository providerProfileRepository;
    private final CategoryRepository categoryRepository;

    public ServiceServiceImpl(ServiceRepository serviceRepository,
                               ProviderProfileRepository providerProfileRepository,
                               CategoryRepository categoryRepository) {
        this.serviceRepository = serviceRepository;
        this.providerProfileRepository = providerProfileRepository;
        this.categoryRepository = categoryRepository;
    }

    @Override
    public ServiceResponseDTO createService(ServiceRequestDTO request) {
        ProviderProfile provider = providerProfileRepository.findById(request.getProviderId())
                .orElseThrow(() -> new RuntimeException(
                        "Provider not found with id: " + request.getProviderId()));

        Category category = categoryRepository.findById(request.getCategoryId())
                .orElseThrow(() -> new RuntimeException(
                        "Category not found with id: " + request.getCategoryId()));

        com.localservice.marketplace.entity.Service service = com.localservice.marketplace.entity.Service.builder()
                .provider(provider)
                .category(category)
                .title(request.getTitle())
                .description(request.getDescription())
                .price(request.getPrice())
                .duration(request.getDuration())
                .availability(request.getAvailability() != null ? request.getAvailability() : true)
                .build();

        com.localservice.marketplace.entity.Service savedService = serviceRepository.save(service);

        return mapToResponseDTO(savedService);
    }

    @Override
    public List<ServiceResponseDTO> getAllServices() {
        return serviceRepository.findAll()
                .stream()
                .map(this::mapToResponseDTO)
                .collect(Collectors.toList());
    }

    @Override
    public ServiceResponseDTO getServiceById(Long serviceId) {
        com.localservice.marketplace.entity.Service service = serviceRepository.findById(serviceId)
                .orElseThrow(() -> new RuntimeException(
                        "Service not found with id: " + serviceId));

        return mapToResponseDTO(service);
    }

    @Override
    public ServiceResponseDTO updateService(Long serviceId, ServiceRequestDTO request) {
        com.localservice.marketplace.entity.Service existingService = serviceRepository.findById(serviceId)
                .orElseThrow(() -> new RuntimeException(
                        "Service not found with id: " + serviceId));

        ProviderProfile provider = providerProfileRepository.findById(request.getProviderId())
                .orElseThrow(() -> new RuntimeException(
                        "Provider not found with id: " + request.getProviderId()));

        Category category = categoryRepository.findById(request.getCategoryId())
                .orElseThrow(() -> new RuntimeException(
                        "Category not found with id: " + request.getCategoryId()));

        existingService.setProvider(provider);
        existingService.setCategory(category);
        existingService.setTitle(request.getTitle());
        existingService.setDescription(request.getDescription());
        existingService.setPrice(request.getPrice());
        existingService.setDuration(request.getDuration());
        existingService.setAvailability(request.getAvailability() != null ? request.getAvailability() : true);

        com.localservice.marketplace.entity.Service updatedService = serviceRepository.save(existingService);

        return mapToResponseDTO(updatedService);
    }

    @Override
    public void deleteService(Long serviceId) {
        com.localservice.marketplace.entity.Service existingService = serviceRepository.findById(serviceId)
                .orElseThrow(() -> new RuntimeException(
                        "Service not found with id: " + serviceId));

        serviceRepository.delete(existingService);
    }

    @Override
    public List<ServiceResponseDTO> getServicesByCategory(Long categoryId) {
        return serviceRepository.findByCategory_CategoryId(categoryId)
                .stream()
                .map(this::mapToResponseDTO)
                .collect(Collectors.toList());
    }

    @Override
    public List<ServiceResponseDTO> getServicesByProvider(Long providerId) {
        return serviceRepository.findByProvider_ProviderId(providerId)
                .stream()
                .map(this::mapToResponseDTO)
                .collect(Collectors.toList());
    }

    private ServiceResponseDTO mapToResponseDTO(com.localservice.marketplace.entity.Service service) {
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
}