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
	// 의존성을 주입 시킴
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
		//projectDTO.setMemberId(126);
		projectDTO.setProjectId(2);
//		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
//		Date startdate = dateFormat.parse("2023-08-25");
		projectDTO.setProjectStart("2023-08-25");
		projectDTO.setProjectEnd("2023-08-28");
		projectDTO.setProjectName("팀회의");
		calendarProjectService.insertProject(projectDTO);
	}
}
