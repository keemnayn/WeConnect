package com.arezip.weconnect.test.admin.leaverequest;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.arezip.weconnect.mapper.admin.AdminLeaveRequestMapper;
import com.arezip.weconnect.model.dto.LeaveRequestDTO;

import lombok.extern.slf4j.Slf4j;

@SpringBootTest
@Slf4j
public class AdminLeaveRequestMapperTest {
	@Autowired
	AdminLeaveRequestMapper adminLeaveRequestMapper;

//	조회
	@Test
	void selectAllLeaveRequestsTest() {
		List<LeaveRequestDTO> list = adminLeaveRequestMapper.selectAllLeaveRequests();
		list.forEach(leaveRequests -> log.info(leaveRequests.toString()));
		assertNotNull(list);
	}

//	승인
	@Test
	void approveAndDecrementLeaveRequestTest() {
		// 테스트 데이터 준비: 이 부분은 실제 DB 연동이 아닌 Mocking을 이용한 예시입니다.
		long leaveRequestId = 70;
		LeaveRequestDTO mockLeaveRequest = new LeaveRequestDTO();
		mockLeaveRequest.setLeaveRequestId(leaveRequestId);
		mockLeaveRequest.setLeaveRequestStatus("승인 대기");

		// 승인 요청
		int updatedApproveRows = adminLeaveRequestMapper.approveLeaveRequest(leaveRequestId);

		// 연차 개수 감소를 위한 DTO 설정
		LeaveRequestDTO dto = new LeaveRequestDTO();
		dto.setLeaveRequestType("반차");
		dto.setLeaveRequestStart("2023-08-22");
		dto.setLeaveRequestEnd("2023-08-22");
		dto.setMemberId(131); // 예시 회원 ID 값입니다.

		// daysBetween 값 구하기
		double daysBetween = dto.getDaysBetween();
		dto.setDaysBetween(daysBetween);

		// 연차 개수 감소
		int updatedLeaveCountRows = adminLeaveRequestMapper.decrementLeaveCount(dto);

		// 결과 검증
		assertThat(updatedApproveRows).isEqualTo(1);
		assertThat(updatedLeaveCountRows).isEqualTo(1);
	}

	// 거절
	@Test
	void rejectLeaveRequestTest() {
		long leaveRequestId = 103;
		int result = adminLeaveRequestMapper.rejectLeaveRequest(leaveRequestId);
		assertNotEquals(0, result);
	}

//	검색
	@Test
	void selectLeaveRequestByCriteriaTest() {
		Map<String, String> searchParams = new HashMap<>();
		searchParams.put("searchType", "all");
		searchParams.put("searchText", "거절");
		List<LeaveRequestDTO> list = adminLeaveRequestMapper.selectLeaveRequestByCriteria(searchParams);
		list.forEach(attendances -> log.info(attendances.toString()));
		assertNotNull(list);
	}
}