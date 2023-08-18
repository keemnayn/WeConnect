package com.arezip.weconnect.model.dto;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MemberDTO implements Serializable {
	/**
	 * memberVO 직렬화
	 */
	private static final long serialVersionUID = 3518804505456304614L;
	private long memberId;
	private String memberName;
	private String memberEmail;
	private String memberPassword;
	private String position;
	private String memberStatus;
	private String managerYn;
	private long leaveCount;
	private String memberJoinDate;
	private long departmentId;
	private String departmentName;
}