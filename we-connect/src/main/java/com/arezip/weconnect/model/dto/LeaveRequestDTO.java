package com.arezip.weconnect.model.dto;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LeaveRequestDTO {
	private long leaveRequestId;
	private String leaveRequestType;
	private Date leaveRequestStart;
	private Date leaveRequestEnd;
	private String leaveRequestStatus;
	private String leaveRequestReason;
	private MemberDTO memberVO;
}
