package com.arezip.weconnect.service;

import com.arezip.weconnect.model.dto.LeaveRequestDTO;

public interface LeaveRequestService {
	// 연차 insert 문 추가
	int LeaveRequest(LeaveRequestDTO leaveRequest);

	int updateLeaveCount(long memberId);
}
