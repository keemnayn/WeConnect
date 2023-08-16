package com.arezip.weconnect.model.vo;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

@Getter
@ToString
@RequiredArgsConstructor
public class ProjectMemberVO {
	private final MemberVO memberVO;
	private final ProjectVO projectVO;
}
