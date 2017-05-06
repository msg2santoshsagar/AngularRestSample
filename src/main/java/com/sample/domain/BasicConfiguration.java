package com.sample.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;



@Entity
@Table(name="basic_configuration")
public class BasicConfiguration {
	
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@NotNull
	@Size(min = 1, max = 40)
	@Column(name="application_version",length=40,nullable=false)
	private String applicationVersion;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getApplicationVersion() {
		return applicationVersion;
	}

	public void setApplicationVersion(String applicationVersion) {
		this.applicationVersion = applicationVersion;
	}

	
	
}
