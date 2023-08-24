package com.arezip.weconnect.service.admin;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.arezip.weconnect.mapper.admin.AdminAttendanceMapper;
import com.arezip.weconnect.model.dto.AttendanceDTO;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AdminAttendanceServiceImpl implements AdminAttendanceService {
	private final AdminAttendanceMapper adminAttendanceMapper;

//	조회
	@Override
	public List<AttendanceDTO> getAllAttendance() {
		return adminAttendanceMapper.selectAllAttendance();
	}

//	검색
	@Override
	public List<AttendanceDTO> searchAttendanceByCriteria(Map<String, String> searchParams) {
		return adminAttendanceMapper.selectAttendanceByCriteria(searchParams);
	}
}