package com.arezip.weconnect.model.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProjectMemberVO {
	private MemberVO memberVO;
	private ProjectVO projectVO;
}