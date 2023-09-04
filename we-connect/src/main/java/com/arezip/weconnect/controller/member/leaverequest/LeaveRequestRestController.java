package com.arezip.weconnect.controller.member.leaverequest;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.View;

import com.arezip.weconnect.model.dto.LeaveRequestDTO;
import com.arezip.weconnect.service.LeaveRequestService;
import com.cleopatra.protocol.data.DataRequest;
import com.cleopatra.protocol.data.ParameterGroup;
import com.cleopatra.spring.JSONDataView;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@RequestMapping("/weconnect/member/leave-request")
@RequiredArgsConstructor
public class LeaveRequestRestController {
	private final LeaveRequestService leaveRequestService;

	@PostMapping
	public View leaveRequest(DataRequest dataRequest, HttpServletRequest request) {
		log.info("****연차 신청 컨트롤러***");

		// 연차신청 데이터 맵
		ParameterGroup parameterGroup = dataRequest.getParameterGroup("leaveRequest");
		String leaveRequestType = parameterGroup.getValue("leaveRequestType");
		String leaveRequestStart = parameterGroup.getValue("leaveRequestStart");
		String leaveRequestEnd = parameterGroup.getValue("leaveRequestEnd");
		String leaveRequestReason = parameterGroup.getValue("leaveRequestReason");
		HttpSession session = request.getSession();
		Long memberId = (Long) session.getAttribute("memberId");
		// 값 확인 로그 출력
		log.info("구분: {}", leaveRequestType);
		log.info("시작: {}", leaveRequestStart);
		log.info("종료: {}", leaveRequestEnd);
		log.info("본문: {}", leaveRequestReason);

		// 연차 신청 데이터 설정
		LeaveRequestDTO leaveRequestDTO = new LeaveRequestDTO();
		leaveRequestDTO.setLeaveRequestType(leaveRequestType);
		String startDate = leaveRequestStart;
		String endDate = leaveRequestEnd;
		leaveRequestDTO.setLeaveRequestStart(startDate);
		leaveRequestDTO.setLeaveRequestEnd(endDate);
		leaveRequestDTO.setLeaveRequestReason(leaveRequestReason);
		leaveRequestDTO.setMemberId(memberId);
		// 연차 신청 서비스 호출 및 로그 출력
		leaveRequestService.LeaveRequest(leaveRequestDTO);
		log.info("연차 등록: {}", leaveRequestDTO);
//		leaveRequestService.updateLeaveCount(memberId);
//		log.info("연차 카운트성공:{}", leaveRequestService.updateLeaveCount(memberId));
		return new JSONDataView();
	}
}