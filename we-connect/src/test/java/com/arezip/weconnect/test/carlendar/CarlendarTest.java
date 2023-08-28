package com.arezip.weconnect.test.carlendar;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.arezip.weconnect.model.dto.ProjectDTO;
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
		long memberId = 126;
		calendarProjectService.findProjectByMemberId(memberId);
		log.info("테스트: {}", calendarProjectService.findProjectByMemberId(memberId));
	}
	
	@Test
	void insertTest() {
		ProjectDTO projectDTO = new ProjectDTO();
		projectDTO.setMemberId(24);
		projectDTO.setProjectId(2);
		projectDTO.setProjectStart("20230825");
		projectDTO.setProjectEnd("20230828");
		projectDTO.setProjectName("팀회의");
	}
}
