package com.localservice.marketplace.service;

import com.localservice.marketplace.dto.response.CustomerDashboardResponse;

public interface DashboardService {

    CustomerDashboardResponse getCustomerDashboard(Long customerId);

}