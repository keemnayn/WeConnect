package com.arezip.weconnect.service.admin;

import java.util.List;
import java.util.Map;

import com.arezip.weconnect.model.dto.AttendanceDTO;

public interface AdminAttendanceService {
	List<AttendanceDTO> getAllAttendance();

	List<AttendanceDTO> searchAttendanceByCriteria(Map<String, String> searchParams);
}
