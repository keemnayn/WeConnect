package com.arezip.weconnect.model.dto;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LeaveRequestDTO {
	private long leaveRequestId;
	private String leaveRequestType;
	private String leaveRequestStart;
	private String leaveRequestEnd;
	private String leaveRequestStatus;
	private String leaveRequestReason;
	private String memberName;
	private String departmentName;
	private String position;
	private double leaveCount;
	private long memberId;
	private String formattedLeaveCount;
	private double daysBetween;

	public String getFormattedLeaveCount() {
		if (leaveCount == (long) leaveCount) {
			return String.valueOf((long) leaveCount);
		}
		return String.valueOf(leaveCount);
	}

	public double getDaysBetween() {
		// 반차인 경우
		if ("반차".equals(leaveRequestType)) {
			return 0.5;
		}

		// 연차인 경우
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
		LocalDate start = LocalDate.parse(leaveRequestStart, formatter);
		LocalDate end = LocalDate.parse(leaveRequestEnd, formatter);

		// 날짜 차이 계산 (+1은 시작일과 종료일을 모두 포함하기 위함)
		return ChronoUnit.DAYS.between(start, end) + 1;
	}
}
