package com.arezip.weconnect.test.attendance;

import java.util.Date;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.arezip.weconnect.model.dto.AttendanceDTO;
import com.arezip.weconnect.model.dto.MemberDTO;
import com.arezip.weconnect.service.AttendanceService;
import com.arezip.weconnect.service.LeaveRequestService;

import lombok.RequiredArgsConstructor;

@SpringBootTest
public class AttendanceInsert {
	@Autowired
	AttendanceService attendanceService;

	
	@Test
	void insert() {
	}
}
