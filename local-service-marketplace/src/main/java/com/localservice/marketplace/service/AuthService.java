package com.localservice.marketplace.service;

import com.localservice.marketplace.dto.request.LoginRequestDTO;
import com.localservice.marketplace.dto.request.RegisterRequestDTO;
import com.localservice.marketplace.dto.response.AuthResponseDTO;

public interface AuthService {

    AuthResponseDTO register(RegisterRequestDTO request);

    AuthResponseDTO login(LoginRequestDTO request);
}