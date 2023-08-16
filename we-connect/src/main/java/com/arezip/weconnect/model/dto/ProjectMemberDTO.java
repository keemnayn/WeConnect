package com.arezip.weconnect.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProjectMemberDTO {
	private MemberDTO memberVO;
	private ProjectDTO projectVO;
}
