package com.arezip.weconnect.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.arezip.weconnect.model.dto.AttendanceDTO;

@Mapper
public interface AttendanceMapper {
	void insertAttendance(long memberId);

	int attendanceCheck(long memberId);

	// 퇴근 기록
	void updateAttendance(long memberId);

	List<AttendanceDTO> AttendanceList(long memberId);

//	그날 출근 퇴근 기록
	AttendanceDTO selectTodayAttendanceByMemberId(long memberId);
}
