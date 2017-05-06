package com.sample.config;

import javax.sql.DataSource;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import liquibase.integration.spring.SpringLiquibase;



@Configuration
@EnableJpaRepositories("com.sample.repository")
public class DatabaseConfiguration {

	
	@Bean
	public SpringLiquibase liquibase(DataSource dataSource){
		SpringLiquibase liquibase = new SpringLiquibase();
        liquibase.setDataSource(dataSource);
        liquibase.setChangeLog("classpath:config/liquibase/master.xml");
        return liquibase;
	}
	

}
