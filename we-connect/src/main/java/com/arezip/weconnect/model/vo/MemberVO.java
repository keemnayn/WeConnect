package com.arezip.weconnect.model.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MemberVO {
	private long memberId;
	private String memberName;
	private String memberEmail;
	private String memberPassword;
	private String position;
	private String memberStatus;
	private String managerYn;
	private DepartmentVO departmentVO;
}
