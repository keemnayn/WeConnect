package com.arezip.weconnect.model.vo;

import java.util.Date;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

@Getter
@ToString
@RequiredArgsConstructor
public class ProjectVO {
	private final long projectId;
	private final String projectName;
	private final Date projectStart;
	private final Date projectEnd;
	private final MemberVO memberVO;
}
