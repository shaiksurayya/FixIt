package com.localservice.marketplace.controller;

import com.localservice.marketplace.dto.request.BookingRequestDTO;
import com.localservice.marketplace.dto.response.BookingResponseDTO;
import com.localservice.marketplace.enums.BookingStatus;
import com.localservice.marketplace.service.BookingService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bookings")
@RequiredArgsConstructor
public class BookingController {

    private final BookingService bookingService;

    @PostMapping
    public ResponseEntity<BookingResponseDTO> createBooking(@Valid @RequestBody BookingRequestDTO request) {
        BookingResponseDTO response = bookingService.createBooking(request);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<BookingResponseDTO>> getAllBookings() {
        List<BookingResponseDTO> responses = bookingService.getAllBookings();
        return new ResponseEntity<>(responses, HttpStatus.OK);
    }

    @GetMapping("/{bookingId}")
    public ResponseEntity<BookingResponseDTO> getBookingById(@PathVariable Long bookingId) {
        BookingResponseDTO response = bookingService.getBookingById(bookingId);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/customer/{customerId}")
    public ResponseEntity<List<BookingResponseDTO>> getBookingsByCustomer(@PathVariable Long customerId) {
        List<BookingResponseDTO> responses = bookingService.getBookingsByCustomer(customerId);
        return new ResponseEntity<>(responses, HttpStatus.OK);
    }

    @GetMapping("/provider/{providerId}")
    public ResponseEntity<List<BookingResponseDTO>> getBookingsByProvider(@PathVariable Long providerId) {
        List<BookingResponseDTO> responses = bookingService.getBookingsByProvider(providerId);
        return new ResponseEntity<>(responses, HttpStatus.OK);
    }

    @GetMapping("/status/{status}")
    public ResponseEntity<List<BookingResponseDTO>> getBookingsByStatus(@PathVariable BookingStatus status) {
        List<BookingResponseDTO> responses = bookingService.getBookingsByStatus(status);
        return new ResponseEntity<>(responses, HttpStatus.OK);
    }

    @PutMapping("/{bookingId}/status")
    public ResponseEntity<BookingResponseDTO> updateBookingStatus(@PathVariable Long bookingId,
                                                                    @RequestParam BookingStatus status) {
        BookingResponseDTO response = bookingService.updateBookingStatus(bookingId, status);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @DeleteMapping("/{bookingId}")
    public ResponseEntity<Void> deleteBooking(@PathVariable Long bookingId) {
        bookingService.deleteBooking(bookingId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}