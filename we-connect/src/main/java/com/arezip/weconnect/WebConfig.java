package com.arezip.weconnect;

import java.util.List;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.cleopatra.spring.DataRequestResolver;

@Configuration
public class WebConfig implements WebMvcConfigurer {

	@Override
	public void addArgumentResolvers(List resolvers) {
		resolvers.add(new DataRequestResolver());
	}
	@Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {    
		// addResourceHandler("매핑 경로")를 적어둔다. 
		//localhost:10001/~ 로 들어오는 모든 정적 리소스 요청을 static폴더가 아닌 .addResourceLoactions에 적어둔 경로로 부터 찾아준다.
		registry.addResourceHandler("/FileUpload/**").addResourceLocations("file:///C:/FileUpload/");
    }
}