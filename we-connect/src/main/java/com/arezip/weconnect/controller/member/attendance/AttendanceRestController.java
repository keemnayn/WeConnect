package com.arezip.weconnect.controller.member.attendance;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.View;

import com.arezip.weconnect.service.AttendanceService;
import com.cleopatra.protocol.data.DataRequest;
import com.cleopatra.spring.JSONDataView;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@RequestMapping("/weconnect/member/attendance")
@RequiredArgsConstructor
public class AttendanceRestController {
	private final AttendanceService attendanceService;

	@PostMapping
	public View AttendanceInsert(DataRequest dataRequest, HttpServletRequest request) {
		HttpSession session = request.getSession();
		Long memberId = (Long) session.getAttribute("memberId");
		boolean check = attendanceService.attendanceCheck(memberId);
		if (check) {
			attendanceService.insertAttendance(memberId);
		} else {
			Map<String, Object> message  = new HashMap<>();
			message.put("error", "x");
			dataRequest.setMetadata(false, message);
		}
		// AttendanceService를 이용하여 데이터 삽입
		return new JSONDataView();
	} 
}
