package com.localservice.marketplace.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CustomerDashboardResponse {

    private String customerName;

    private long totalBookings;

    private long completedBookings;

    private long reviews;
}