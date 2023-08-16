package com.arezip.weconnect.model.vo;

import java.util.Date;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

@Getter
@ToString
@RequiredArgsConstructor
public class FreeBoardCommentVO {
	private final long freeBoardCommentId;
	private final String freeBoardCommentContent;
	private final Date freeBoardCommentDate;
	private final MemberVO memberVO;
	private final FreeBoardVO freeBoardVO;
}