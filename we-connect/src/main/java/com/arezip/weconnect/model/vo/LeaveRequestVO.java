package com.arezip.weconnect.model.vo;

import java.util.Date;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

@Getter
@ToString
@RequiredArgsConstructor
public class LeaveRequestVO {
	private final long leaveRequestId;
	private final String leaveRequestType;
	private final Date leaveRequestStart;
	private final Date leaveRequestEnd;
	private final String leaveRequestStatus;
	private final String leaveRequestReason;
	private final MemberVO memberVO;
}
