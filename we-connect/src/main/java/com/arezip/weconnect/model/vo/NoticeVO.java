package com.arezip.weconnect.model.vo;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

@Getter
@ToString
@RequiredArgsConstructor
public class NoticeVO {
	private final long noticeId;
	private final String noticeTitle;
	private final String noticeContent;
	private final long noticeViews;
	private final String noticeCreate;
	private final MemberVO memberVO;
	private final String noticeCategory;
}
