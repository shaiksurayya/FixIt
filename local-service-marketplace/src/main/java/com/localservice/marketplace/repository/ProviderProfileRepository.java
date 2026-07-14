package com.localservice.marketplace.repository;

import com.localservice.marketplace.entity.ProviderProfile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProviderProfileRepository extends JpaRepository<ProviderProfile, Long> {
}