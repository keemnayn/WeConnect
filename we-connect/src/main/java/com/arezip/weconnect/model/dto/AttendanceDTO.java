package com.arezip.weconnect.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AttendanceDTO {
	private long attendanceId;
	private String workInTime;
	private String workOutTime;
	private String workDay;
	private String attendanceStatus;
//	
//	
//	
//
//
//	
	private String memberName;
	private String position;
	private String departmentName;
}
