package com.arezip.weconnect.service.admin;

import java.util.List;
import java.util.Map;

import com.arezip.weconnect.model.dto.LeaveRequestDTO;

public interface AdminLeaveRequestService {
//	전체 조회
	List<LeaveRequestDTO> getAllLeaveRequests();

//	승인
	boolean approveAndDecrementLeaveRequest(LeaveRequestDTO leaveRequestDTO);

//	거절
	boolean rejectLeaveRequest(long leaveRequestId);

//	검색
	List<LeaveRequestDTO> searchLeaveRequestByCriteria(Map<String, String> searchParams);
}