package com.arezip.weconnect.model.vo;

import java.util.Date;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

@Getter
@ToString
@RequiredArgsConstructor
public class MyPostVO {
	private final long privatePostId;
	private final String privatePostTitle;
	private final String privatePostContent;
	private final Date privatePostDate;
	private final MemberVO memberVO;
}
