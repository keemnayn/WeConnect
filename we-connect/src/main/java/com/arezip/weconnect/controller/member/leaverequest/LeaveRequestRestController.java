package com.arezip.weconnect.controller.member.leaverequest;

import java.time.LocalDate;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.util.Date;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.View;

import com.arezip.weconnect.model.dto.LeaveRequestDTO;
import com.arezip.weconnect.service.LeaveRequestService;
import com.cleopatra.protocol.data.DataRequest;
import com.cleopatra.protocol.data.ParameterGroup;
import com.cleopatra.spring.JSONDataView;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@RequestMapping("/weconnect/member/leave-request")
@RequiredArgsConstructor
public class LeaveRequestRestController {
	private final LeaveRequestService leaveRequestService;

	@PostMapping
	public View leaveRequest(DataRequest dataRequest) {
		log.info("****연차 신청 컨트롤러***");

		// 연차신청 데이터 맵
		ParameterGroup parameterGroup = dataRequest.getParameterGroup("leaveRequest");
		String leaveRequestType = parameterGroup.getValue("leaveRequestType");
		String leaveRequestStart = parameterGroup.getValue("leaveRequestStart");
		String leaveRequestEnd = parameterGroup.getValue("leaveRequestEnd");
		String leaveRequestReason = parameterGroup.getValue("leaveRequestReason");
		long memberId = 22;

		// 값 확인 로그 출력
		log.info("구분: {}", leaveRequestType);
		log.info("시작: {}", leaveRequestStart);
		log.info("종료: {}", leaveRequestEnd);
		log.info("본문: {}", leaveRequestReason);

		// 연차 신청 데이터 설정
		LeaveRequestDTO leaveRequestDTO = new LeaveRequestDTO();
		leaveRequestDTO.setLeaveRequestType(leaveRequestType);
		DateTimeFormatter dateFormatter = DateTimeFormatter.ofPattern("yyyyMMdd");
		try {
			LocalDate startDate = LocalDate.parse(leaveRequestStart, dateFormatter);
			LocalDate endDate = LocalDate.parse(leaveRequestEnd, dateFormatter);
			leaveRequestDTO.setLeaveRequestStart(Date.from(startDate.atStartOfDay(ZoneId.systemDefault()).toInstant()));
			leaveRequestDTO.setLeaveRequestEnd(Date.from(endDate.atStartOfDay(ZoneId.systemDefault()).toInstant()));
			leaveRequestDTO.setLeaveRequestReason(leaveRequestReason);
			leaveRequestDTO.setMemberId(memberId);
			leaveRequestDTO.setLeaveRequestStatus("승인 대기");
		} catch (DateTimeParseException e) {
			log.error("날짜 파싱 에러", e);
		}

		// 연차 신청 서비스 호출 및 로그 출력
		leaveRequestService.LeaveRequest(leaveRequestDTO);
		log.info("연차 등록: {}", leaveRequestDTO);
		return new JSONDataView();
	}

	// 관리자페이지 리스트 조회
	@GetMapping("/leave-request-list")
	public View leaveRequestList(DataRequest dataRequest) {
		List<LeaveRequestDTO> LeaveRequest = leaveRequestService.leaveRequestData();
		log.info("list:{}", LeaveRequest);
		dataRequest.setResponse("LeaveRequest", LeaveRequest);
		return new JSONDataView();
	}
}