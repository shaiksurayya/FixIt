package com.localservice.marketplace.service.impl;

import com.localservice.marketplace.dto.request.BookingRequestDTO;
import com.localservice.marketplace.dto.response.BookingResponseDTO;
import com.localservice.marketplace.entity.Booking;
import com.localservice.marketplace.entity.ProviderProfile;
import com.localservice.marketplace.entity.User;
import com.localservice.marketplace.enums.BookingStatus;
import com.localservice.marketplace.repository.BookingRepository;
import com.localservice.marketplace.repository.ProviderProfileRepository;
import com.localservice.marketplace.repository.ServiceRepository;
import com.localservice.marketplace.repository.UserRepository;
import com.localservice.marketplace.service.BookingService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;
@Service
@Transactional
public class BookingServiceImpl implements BookingService {

    private final BookingRepository bookingRepository;
    private final UserRepository userRepository;
    private final ProviderProfileRepository providerProfileRepository;
    private final ServiceRepository serviceRepository;

    public BookingServiceImpl(BookingRepository bookingRepository,
                               UserRepository userRepository,
                               ProviderProfileRepository providerProfileRepository,
                               ServiceRepository serviceRepository) {
        this.bookingRepository = bookingRepository;
        this.userRepository = userRepository;
        this.providerProfileRepository = providerProfileRepository;
        this.serviceRepository = serviceRepository;
    }

    @Override
    public BookingResponseDTO createBooking(BookingRequestDTO request) {
        User customer = userRepository.findById(request.getCustomerId())
                .orElseThrow(() -> new RuntimeException("Customer not found with id: " + request.getCustomerId()));

        ProviderProfile provider = providerProfileRepository.findById(request.getProviderId())
                .orElseThrow(() -> new RuntimeException("Provider not found with id: " + request.getProviderId()));

        com.localservice.marketplace.entity.Service service =
        serviceRepository.findById(request.getServiceId())
        .orElseThrow(() ->
            new RuntimeException("Service not found with id: " + request.getServiceId()));

        Booking booking = Booking.builder()
                .customer(customer)
                .provider(provider)
                .service(service)
                .bookingDate(request.getBookingDate())
                .bookingTime(request.getBookingTime())
                .address(request.getAddress())
                .totalAmount(service.getPrice())
                .status(BookingStatus.REQUESTED)
                .paymentMethod("CASH_ON_SERVICE")
                .build();

        Booking savedBooking = bookingRepository.save(booking);

        return mapToResponseDTO(savedBooking);
    }

    @Override
    public List<BookingResponseDTO> getAllBookings() {
        return bookingRepository.findAll()
                .stream()
                .map(this::mapToResponseDTO)
                .collect(Collectors.toList());
    }

    @Override
    public BookingResponseDTO getBookingById(Long bookingId) {
        Booking booking = bookingRepository.findById(bookingId)
                .orElseThrow(() -> new RuntimeException("Booking not found with id: " + bookingId));
        return mapToResponseDTO(booking);
    }

    @Override
    public List<BookingResponseDTO> getBookingsByCustomer(Long customerId) {
        return bookingRepository.findByCustomer_UserId(customerId)
                .stream()
                .map(this::mapToResponseDTO)
                .collect(Collectors.toList());
    }

    @Override
    public List<BookingResponseDTO> getBookingsByProvider(Long providerId) {
        return bookingRepository.findByProvider_ProviderId(providerId)
                .stream()
                .map(this::mapToResponseDTO)
                .collect(Collectors.toList());
    }

    @Override
    public List<BookingResponseDTO> getBookingsByStatus(BookingStatus status) {
        return bookingRepository.findByStatus(status)
                .stream()
                .map(this::mapToResponseDTO)
                .collect(Collectors.toList());
    }

    @Override
    public BookingResponseDTO updateBookingStatus(Long bookingId, BookingStatus status) {
        Booking booking = bookingRepository.findById(bookingId)
                .orElseThrow(() -> new RuntimeException("Booking not found with id: " + bookingId));

        booking.setStatus(status);
        Booking updatedBooking = bookingRepository.save(booking);

        return mapToResponseDTO(updatedBooking);
    }

    @Override
    public void deleteBooking(Long bookingId) {
        Booking booking = bookingRepository.findById(bookingId)
                .orElseThrow(() -> new RuntimeException("Booking not found with id: " + bookingId));
        bookingRepository.delete(booking);
    }

    private BookingResponseDTO mapToResponseDTO(Booking booking) {
        return BookingResponseDTO.builder()
                .bookingId(booking.getBookingId())
                .customerId(booking.getCustomer().getUserId())
                .customerName(booking.getCustomer().getName())
                .providerId(booking.getProvider().getProviderId())
                .providerName(booking.getProvider().getUser().getName())
                .serviceId(booking.getService().getServiceId())
                .serviceTitle(booking.getService().getTitle())
                .bookingDate(booking.getBookingDate())
                .bookingTime(booking.getBookingTime())
                .address(booking.getAddress())
                .totalAmount(booking.getTotalAmount())
                .status(booking.getStatus())
                .paymentMethod(booking.getPaymentMethod())
                .createdAt(booking.getCreatedAt())
                .build();
    }
}