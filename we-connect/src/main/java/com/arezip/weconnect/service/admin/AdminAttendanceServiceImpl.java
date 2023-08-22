package com.arezip.weconnect.service.admin;

import java.util.List;

import org.springframework.stereotype.Service;

import com.arezip.weconnect.mapper.admin.AdminAttendanceMapper;
import com.arezip.weconnect.model.dto.AttendanceDTO;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AdminAttendanceServiceImpl implements AdminAttendanceService {
	private final AdminAttendanceMapper adminAttendanceMapper;

	@Override
	public List<AttendanceDTO> getAllAttendance() {
		return adminAttendanceMapper.selectAllAttendance();
	}
}