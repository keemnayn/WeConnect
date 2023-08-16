package com.arezip.weconnect.model.vo;

import java.io.Serializable;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

@Getter
@ToString
@RequiredArgsConstructor
public class MemberVO implements Serializable {
	/**
	 * memberVO 직렬화
	 */
	private static final long serialVersionUID = 3518804505456304614L;
	private final long memberId;
	private final String memberName;
	private final String memberEmail;
	private final String memberPassword;
	private final String position;
	private final String memberStatus;
	private final String managerYn;
	private final long leaveCount;
	private final DepartmentVO departmentVO;
}
