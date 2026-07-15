package com.localservice.marketplace.service;

import com.localservice.marketplace.dto.request.BookingRequestDTO;
import com.localservice.marketplace.dto.response.BookingResponseDTO;
import com.localservice.marketplace.enums.BookingStatus;

import java.util.List;

public interface BookingService {

    BookingResponseDTO createBooking(BookingRequestDTO request);

    List<BookingResponseDTO> getAllBookings();

    BookingResponseDTO getBookingById(Long bookingId);

    List<BookingResponseDTO> getBookingsByCustomer(Long customerId);

    List<BookingResponseDTO> getBookingsByProvider(Long providerId);

    List<BookingResponseDTO> getBookingsByStatus(BookingStatus status);

    BookingResponseDTO updateBookingStatus(Long bookingId, BookingStatus status);

    void deleteBooking(Long bookingId);
}