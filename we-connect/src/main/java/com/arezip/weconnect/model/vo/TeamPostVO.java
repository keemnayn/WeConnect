package com.arezip.weconnect.model.vo;

import java.util.Date;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

@Getter
@ToString
@RequiredArgsConstructor
public class TeamPostVO {
	private final long teamPostId;
	private final String teamPostTitle;
	private final String teamPostContent;
	private final long teamPostViews;
	private final Date teamPostCreate;
	private final MemberVO memberVO;
	private final ProjectVO projectVO;

}
