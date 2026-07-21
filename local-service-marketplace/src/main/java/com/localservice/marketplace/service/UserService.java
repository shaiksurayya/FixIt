package com.localservice.marketplace.service;

import com.localservice.marketplace.dto.response.UserResponseDTO;

public interface UserService {

    UserResponseDTO getUserById(Long userId);

}