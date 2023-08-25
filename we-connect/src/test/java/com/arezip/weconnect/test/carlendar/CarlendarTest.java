package com.arezip.weconnect.test.carlendar;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.arezip.weconnect.service.CalendarProjectService;

import lombok.extern.slf4j.Slf4j;

@SpringBootTest
@Slf4j
public class CarlendarTest {
	//의존성을 주입 시킴 
	@Autowired
	CalendarProjectService calendarProjectService;
	
	
	@Test
	void test() {
		long memberId = 131;
		calendarProjectService.findProjectStartEnd(memberId);
		log.info("테스트: {}", calendarProjectService.findProjectStartEnd(memberId));
	}
}
