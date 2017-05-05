package com.sample.web.rest;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sample.domain.BasicConfiguration;
import com.sample.repository.BasicConfigurationRepository;

@RestController
@RequestMapping("/api")
public class BasicConfigurationController {

	private BasicConfigurationRepository basicConfigurationRepository;
	
	BasicConfigurationController(BasicConfigurationRepository basicConfigurationRepository){
		this.basicConfigurationRepository=basicConfigurationRepository;
	}
	
	@GetMapping("/basicConfiguration")
	public BasicConfiguration findBasicConfiguration(){
		List<BasicConfiguration> configList=basicConfigurationRepository.findAll();
		BasicConfiguration config=null;
		if(configList!=null && !configList.isEmpty()){
			config=configList.get(0);
		}
		return config;
	}
	
}
