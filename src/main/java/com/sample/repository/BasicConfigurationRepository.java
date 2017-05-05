package com.sample.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sample.domain.BasicConfiguration;

public interface BasicConfigurationRepository extends JpaRepository<BasicConfiguration, Long> {

}
