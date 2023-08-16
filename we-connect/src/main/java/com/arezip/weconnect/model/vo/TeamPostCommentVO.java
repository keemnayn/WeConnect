package com.arezip.weconnect.model.vo;

import java.util.Date;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

@Getter
@ToString
@RequiredArgsConstructor
public class TeamPostCommentVO {
	private final long teamPostCommentId;
	private final String teamPostCommentContent;
	private final Date teamPostCommentDate;
	private final TeamPostVO teamPostVO;
	private final MemberVO memberVO;
}
