package com.arezip.weconnect.service;

import org.springframework.stereotype.Service;

import com.arezip.weconnect.mapper.LeaveRequestMapper;
import com.arezip.weconnect.model.dto.LeaveRequestDTO;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
@RequiredArgsConstructor
public class LeaveRequestServiceImpl implements LeaveRequestService {
	private final LeaveRequestMapper leaveRequestMapper;

	@Override
	public int LeaveRequest(LeaveRequestDTO leaveRequest) {
		return leaveRequestMapper.LeaveRequest(leaveRequest);
	}

	@Override
	public int updateLeaveCount(long memberId) {
		return leaveRequestMapper.updateLeaveCount(memberId);
	}
}
