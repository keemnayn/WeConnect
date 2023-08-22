package com.arezip.weconnect.test.admin.attendance;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.arezip.weconnect.model.dto.AttendanceDTO;
import com.arezip.weconnect.service.admin.AdminAttendanceService;

import lombok.extern.slf4j.Slf4j;

@SpringBootTest
@Slf4j
public class AdminAttendanceServiceTest {
	@Autowired
	AdminAttendanceService adminAttendanceService;

//	근태 조회
	@Test
	void selectAllAttendanceTest() {
		List<AttendanceDTO> list = adminAttendanceService.getAllAttendance();
		list.forEach(attendances -> log.info(attendances.toString()));
		assertNotNull(list);
	}
}
