package com.arezip.weconnect.model.vo;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LeaveRequestVO {
	private long leaveRequestId;
	private String leaveRequestType;
	private Date leaveRequestStart;
	private Date leaveRequestEnd;
	private String leaveRequestStatus;
	private String leaveRequestReason;
	private MemberVO memberVO;
}
