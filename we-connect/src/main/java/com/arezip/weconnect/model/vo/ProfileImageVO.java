package com.arezip.weconnect.model.vo;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

@Getter
@ToString
@RequiredArgsConstructor
public class ProfileImageVO {
	private final long profileImageId;
	private final String profileImagePath;
	private final MemberVO memberVO;
}
