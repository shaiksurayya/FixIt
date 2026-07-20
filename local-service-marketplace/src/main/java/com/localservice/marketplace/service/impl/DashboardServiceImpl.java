package com.localservice.marketplace.service.impl;

import com.localservice.marketplace.dto.response.CustomerDashboardResponse;
import com.localservice.marketplace.entity.User;
import com.localservice.marketplace.repository.UserRepository;
import com.localservice.marketplace.service.DashboardService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class DashboardServiceImpl implements DashboardService {

    private final UserRepository userRepository;

    @Override
    public CustomerDashboardResponse getCustomerDashboard(Long customerId) {

        User user = userRepository.findById(customerId)
                .orElseThrow(() -> new RuntimeException("Customer not found"));

        return CustomerDashboardResponse.builder()
                .customerName(user.getName())
                .totalBookings(0)
                .completedBookings(0)
                .reviews(0)
                .build();
    }
}