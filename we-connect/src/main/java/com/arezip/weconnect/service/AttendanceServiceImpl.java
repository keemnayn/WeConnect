package com.arezip.weconnect.service;

import org.springframework.stereotype.Service;

import com.arezip.weconnect.mapper.AttendanceMapper;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
@RequiredArgsConstructor
public class AttendanceServiceImpl implements AttendanceService {
	private final AttendanceMapper attendanceMapper;

	@Override
	public void insertAttendance(long memberId) {
		// TODO 출근 버튼
		attendanceMapper.insertAttendance(memberId);
	}

	@Override
	public boolean attendanceCheck(long memberId) {
		// TODO Auto-generated method stub
		boolean check = false;
		int result = attendanceMapper.attendanceCheck(memberId);
		if (result == 0) {
			check = true;
		}
		return check; 
	}

}
