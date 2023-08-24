package com.arezip.weconnect.mapper.admin;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.arezip.weconnect.model.dto.LeaveRequestDTO;

@Mapper
public interface AdminLeaveRequestMapper {
//	조회
	List<LeaveRequestDTO> selectAllLeaveRequests();

//	승인
	int approveLeaveRequest(long leaveRequestId);

//	연차 개수 감소
	int decrementLeaveCount(LeaveRequestDTO leaveRequestDTO);

//	거절
	int rejectLeaveRequest(long leaveRequestId);

//	검색
	List<LeaveRequestDTO> selectLeaveRequestByCriteria(Map<String, String> searchParams);
}
