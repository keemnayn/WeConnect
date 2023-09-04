package com.arezip.weconnect.test.admin.leaverequest;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.arezip.weconnect.model.dto.LeaveRequestDTO;
import com.arezip.weconnect.service.admin.AdminLeaveRequestService;
import com.arezip.weconnect.service.admin.AdminMemberService;

import lombok.extern.slf4j.Slf4j;

@SpringBootTest
@Slf4j
public class AdminLeaveRequestServiceTest {
	@Autowired
	AdminLeaveRequestService adminLeaveRequestService;
	@Autowired
	AdminMemberService adminMemberService;
	private LeaveRequestDTO leaveRequestDTO;

//	조회
	@Test
	void getAllLeaveRequestsTest() {
		List<LeaveRequestDTO> list = adminLeaveRequestService.getAllLeaveRequests();
		list.forEach(leaveRequests -> log.info(leaveRequests.toString()));
		assertNotNull(list);
	}

	@BeforeEach
	void setUp() {
		leaveRequestDTO = new LeaveRequestDTO();
		leaveRequestDTO.setLeaveRequestId(22); // 적절한 테스트 값을 설정
		leaveRequestDTO.setLeaveRequestType("연차");
		leaveRequestDTO.setLeaveRequestStart("2023-08-21");
		leaveRequestDTO.setLeaveRequestEnd("2023-09-03");
		leaveRequestDTO.setMemberId(2); // 적절한 테스트 값을 설정
	}

//	승인
	@Test
	void approveAndDecrementLeaveRequestTest() {
		boolean result = adminLeaveRequestService.approveAndDecrementLeaveRequest(leaveRequestDTO);
		assertThat(result).isTrue();
	}

//	거절
	@Test
	void rejectAndNotifyLeaveRequestTest() {
		long leaveRequestId = 102;
		boolean result = adminLeaveRequestService.rejectLeaveRequest(leaveRequestId);
		assertTrue(result);
	}

//	검색
	@Test
	void searchLeaveRequestByCriteriaTest() {
		Map<String, String> searchParams = new HashMap<>();
		searchParams.put("searchType", "all");
		searchParams.put("searchText", "승인");
		List<LeaveRequestDTO> list = adminLeaveRequestService.searchLeaveRequestByCriteria(searchParams);
		list.forEach(attendances -> log.info(attendances.toString()));
		assertNotNull(list);
	}
}