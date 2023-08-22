package com.arezip.weconnect.service;


public interface AttendanceService {
	void insertAttendance(long memberId);
	boolean attendanceCheck(long memberId);
} 
