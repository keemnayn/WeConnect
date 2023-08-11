package com.arezip.weconnect.model.vo;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AttendanceVO {
	private long attendanceId;
	private Date workInTime;
	private Date workOutTime;
	private Date workDay;
	private String attendanceStatus;
	private MemberVO memberVO;
}
