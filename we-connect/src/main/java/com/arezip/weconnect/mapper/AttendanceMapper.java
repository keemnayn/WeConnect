package com.arezip.weconnect.mapper;

import org.apache.ibatis.annotations.Mapper;


@Mapper
public interface AttendanceMapper {
	void insertAttendance(long memberId);
	int attendanceCheck(long memberId);
}
 