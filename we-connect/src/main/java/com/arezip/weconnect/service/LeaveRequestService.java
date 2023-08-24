package com.arezip.weconnect.service;

import java.util.List;

import com.arezip.weconnect.model.dto.LeaveRequestDTO;

public interface LeaveRequestService {
	// 연차 insert 문 추가
	int LeaveRequest(LeaveRequestDTO leaveRequest);

	// 관리자 페이지 연차관리 조회
	List<LeaveRequestDTO> leaveRequestData();
	
	int updateLeaveCount(long memberId);
}
