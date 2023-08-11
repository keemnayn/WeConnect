package com.arezip.weconnect.model.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProfileImageVO {
	private long profileImageId;
	private String profileImagePath;
	private MemberVO memberVO;
}
