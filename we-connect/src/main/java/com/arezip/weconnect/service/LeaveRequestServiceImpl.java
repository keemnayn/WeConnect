package com.arezip.weconnect.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.arezip.weconnect.mapper.LeaveRequestMapper;
import com.arezip.weconnect.model.dto.LeaveRequestDTO;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
@RequiredArgsConstructor
public class LeaveRequestServiceImpl implements LeaveRequestService {
	private  final LeaveRequestMapper leaveRequestMapper;

	@Override
	public int LeaveRequest(LeaveRequestDTO leaveRequest) {
		// TODO 연차 등록 insert 문 
		return leaveRequestMapper.LeaveRequest(leaveRequest);
	}

	@Override
	public List<LeaveRequestDTO> leaveRequestData() {
		// TODO 관리자 페이지 연차 조회 
		return leaveRequestMapper.leaveRequestData();
	}
		
	
	
}
