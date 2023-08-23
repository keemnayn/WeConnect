package com.arezip.weconnect.controller.member.attendance;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.View;

import com.arezip.weconnect.model.dto.AttendanceDTO;
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
	@PutMapping
	public View AttendanceUpdate(HttpServletRequest request) {
		HttpSession session = request.getSession();
		Long memberId = (Long) session.getAttribute("memberId");
		attendanceService.updateAttendance(memberId);
		log.info("퇴근");
		return new JSONDataView();
	}  
	//리스트 조회 
	@GetMapping
	public View AttendanceList(HttpServletRequest request, DataRequest dataRequest) {
		HttpSession session = request.getSession();
		Long memberId = (Long) session.getAttribute("memberId");
		List<AttendanceDTO>attend =attendanceService.AttendanceList(memberId);
		dataRequest.setResponse("attend", attend);
		log.info("기록");
		return new JSONDataView();
	}
}
