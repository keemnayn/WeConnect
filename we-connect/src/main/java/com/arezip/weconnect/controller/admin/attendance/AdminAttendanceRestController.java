package com.arezip.weconnect.controller.admin.attendance;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.View;

import com.arezip.weconnect.model.dto.AttendanceDTO;
import com.arezip.weconnect.service.admin.AdminAttendanceService;
import com.cleopatra.protocol.data.DataRequest;
import com.cleopatra.protocol.data.ParameterGroup;
import com.cleopatra.spring.JSONDataView;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequiredArgsConstructor
@RequestMapping("weconnect/admin/attendances")
@Slf4j
public class AdminAttendanceRestController {
	private final AdminAttendanceService adminAttendanceService;
	@Autowired
	private HttpServletRequest request;

//	근태 조회
	@GetMapping
	public View getAllAttendance(DataRequest dataRequest) {
//		HttpSession session = request.getSession(false);
//		if (session == null || session.getAttribute("memberId") == null) {
//			Map<String, Object> message = new HashMap<>();
//			message.put("error", "로그아웃 상태 입니다");
//			message.put("url", "/");
//			dataRequest.setMetadata(false, message);
//			return new JSONDataView();
//		}
		List<AttendanceDTO> attendanceList = adminAttendanceService.getAllAttendance();
		attendanceList.forEach(attendances -> log.info(attendances.toString()));
		dataRequest.setResponse("attendanceList", attendanceList);
		return new JSONDataView();
	}

//	검색
	@GetMapping("search")
	public View searchAttendance(DataRequest dataRequest) {
		ParameterGroup param = dataRequest.getParameterGroup("searchParam");
		Map<String, String> searchParams = new HashMap<String, String>();
		String searchType = null;
		String searchText = null;
		if (param != null) {
			searchType = param.getValue("searchType");
			searchText = param.getValue("searchText");
		}
		List<AttendanceDTO> attendanceList = null;
		// searchText가 빈 문자열이거나 null이면 전체 리스트 반환
		if (searchText == null || searchText.trim().isEmpty()) {
			attendanceList = adminAttendanceService.getAllAttendance();
		} else {
			if (searchType != null && !"".equals(searchType.trim())) {
				searchParams.put("searchType", searchType);
			}
			searchParams.put("searchText", searchText);
			attendanceList = adminAttendanceService.searchAttendanceByCriteria(searchParams);
		}
		dataRequest.setResponse("attendanceList", attendanceList);
		return new JSONDataView();
	}
}