package com.arezip.weconnect.service;

import java.util.List;

import com.arezip.weconnect.model.dto.AttendanceDTO;

public interface AttendanceService {
	void insertAttendance(long memberId);

	boolean attendanceCheck(long memberId);

	void updateAttendance(long memberId);

	List<AttendanceDTO> AttendanceList(long memberId);

//	금일 출퇴근 시간
	AttendanceDTO getTodayAttendanceByMemberId(long memberId);
}
