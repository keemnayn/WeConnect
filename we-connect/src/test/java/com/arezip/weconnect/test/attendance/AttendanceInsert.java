package com.arezip.weconnect.test.attendance;


import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.log;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.arezip.weconnect.service.AttendanceService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@SpringBootTest
public class AttendanceInsert {
	@Autowired
	AttendanceService attendanceService;

	
	@Test
	void insert() {
	}
	
	@Test 
	void update() {
		long memberId = 131;
		attendanceService.updateAttendance(memberId);
	}
	@Test
	void List() {
		long memberId = 131;
		attendanceService.AttendanceList(memberId);
		log.info("멤버131리스트:{}", attendanceService.AttendanceList(memberId));
	}
}
