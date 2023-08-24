package com.arezip.weconnect.service.admin;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.arezip.weconnect.mapper.admin.AdminLeaveRequestMapper;
import com.arezip.weconnect.model.dto.LeaveRequestDTO;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AdminLeaveRequestServiceImpl implements AdminLeaveRequestService {
	private final AdminLeaveRequestMapper adminLeaveRequestMapper;

//	조회
	@Override
	public List<LeaveRequestDTO> getAllLeaveRequests() {
		List<LeaveRequestDTO> leaveRequests = adminLeaveRequestMapper.selectAllLeaveRequests();
		return leaveRequests;
	}

//	승인
	@Transactional
	public boolean approveAndDecrementLeaveRequest(LeaveRequestDTO leaveRequestDTO) {
		// 휴가 요청 승인
		int approveLeaveRequest = adminLeaveRequestMapper.approveLeaveRequest(leaveRequestDTO.getLeaveRequestId());

		// 연차 개수 감소 (이미 DTO 내부에서 구해져 있음)
		int decrementLeaveCount = adminLeaveRequestMapper.decrementLeaveCount(leaveRequestDTO);

		// 두 작업 모두 성공적으로 수행되었을 때만 true를 반환
		return approveLeaveRequest > 0 && decrementLeaveCount > 0;
	}

//	거절
	@Override
	public boolean rejectLeaveRequest(long leaveRequestId) {
		int result = adminLeaveRequestMapper.rejectLeaveRequest(leaveRequestId);
		return result == 1;
	}

//	검색
	@Override
	public List<LeaveRequestDTO> searchLeaveRequestByCriteria(Map<String, String> searchParams) {
		return adminLeaveRequestMapper.selectLeaveRequestByCriteria(searchParams);
	}
}