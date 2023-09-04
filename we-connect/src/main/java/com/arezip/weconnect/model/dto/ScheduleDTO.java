package com.arezip.weconnect.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ScheduleDTO {
	private String memberName;

	// 연차 정보
	private String leaveRequestType;
	private String leaveRequestStart;
	private String leaveRequestEnd;

	// 프로젝트 정보
	private String projectName;
	private String projectStart;
	private String projectEnd;
}