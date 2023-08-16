package com.arezip.weconnect.model.vo;

import java.util.Date;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

@Getter
@ToString
@RequiredArgsConstructor
public class AttendanceVO {
	private final long attendanceId;
	private final Date workInTime;
	private final Date workOutTime;
	private final Date workDay;
	private final String attendanceStatus;
	private final MemberVO memberVO;
}
