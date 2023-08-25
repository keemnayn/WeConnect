package com.arezip.weconnect.test.leaveRequest;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.arezip.weconnect.model.dto.LeaveRequestDTO;
import com.arezip.weconnect.model.dto.MemberDTO;
import com.arezip.weconnect.service.LeaveRequestService;

import lombok.extern.slf4j.Slf4j;

@SpringBootTest
@Slf4j
public class LeaveRequest {
	@Autowired
	LeaveRequestService leaveRequestService;

	@Test
	void testDI() {
		Assertions.assertNotNull(leaveRequestService);
	}

	@Test
	void InsertLeaveRequest() {
		LeaveRequestDTO leaveRequest = new LeaveRequestDTO();
		leaveRequest.setLeaveRequestType("연차");
//		leaveRequest.setLeaveRequestStart(new Date()); // 오늘 날짜로 시작
//		leaveRequest.setLeaveRequestEnd(new Date()); // 오늘 날짜로 종료
		leaveRequest.setLeaveRequestReason("휴가");
		MemberDTO member = new MemberDTO();
		member.setMemberId(22); // 적절한 회원 ID로 설정해야 합니다.
		// leaveRequest.setMemberVO(member);

		leaveRequestService.LeaveRequest(leaveRequest);
	}

	@Test
	// 테스트하는 곳에서
	void update() {
		long memberId = 131;
		Object hi = leaveRequestService.updateLeaveCount(memberId);
		log.info("업데이트 성공:{}", hi);
	}

}