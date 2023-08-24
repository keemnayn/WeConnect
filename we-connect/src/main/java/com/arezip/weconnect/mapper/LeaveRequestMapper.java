package com.arezip.weconnect.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.arezip.weconnect.model.dto.LeaveRequestDTO;

@Mapper
public interface LeaveRequestMapper {
	int LeaveRequest(LeaveRequestDTO leaveRequest);

	// 사용자가 연차를 사용하면 자동적으로 연차카운트 차감해주게 하는 메소드
	int updateLeaveCount(long memberId);
}
