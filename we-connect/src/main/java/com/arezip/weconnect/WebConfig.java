package com.arezip.weconnect;

import java.util.List;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.cleopatra.spring.DataRequestResolver;

@Configuration
public class WebConfig implements WebMvcConfigurer {

	@Override
	public void addArgumentResolvers(List resolvers) {
		resolvers.add(new DataRequestResolver());
	}
}