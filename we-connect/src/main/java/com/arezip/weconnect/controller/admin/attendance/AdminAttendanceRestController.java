package com.arezip.weconnect.controller.admin.attendance;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.View;

import com.arezip.weconnect.model.dto.AttendanceDTO;
import com.arezip.weconnect.service.admin.AdminAttendanceService;
import com.cleopatra.protocol.data.DataRequest;
import com.cleopatra.spring.JSONDataView;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequiredArgsConstructor
@RequestMapping("weconnect/admin/attendances")
@Slf4j
public class AdminAttendanceRestController {
	private final AdminAttendanceService adminAttendanceService;

//	근태 조회
	@GetMapping
	public View getAllAttendance(DataRequest dataRequest) {
		List<AttendanceDTO> attendanceList = adminAttendanceService.getAllAttendance();
		attendanceList.forEach(attendances -> log.info(attendances.toString()));
		dataRequest.setResponse("attendanceList", attendanceList);
		return new JSONDataView();
	}
}