package com.arezip.weconnect.model.vo;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

@Getter
@ToString
@RequiredArgsConstructor
public class FreeBoardVO {
	private final long freeBoardId;
	private final String freeBoardTitle;
	private final String freeBoardContent;
	private final String freeBoardCreate;
	private final long freeBoardViews;
	private final MemberVO memberVO;
}