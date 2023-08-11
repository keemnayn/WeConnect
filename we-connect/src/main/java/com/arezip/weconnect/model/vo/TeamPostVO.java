package com.arezip.weconnect.model.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TeamPostVO {
	private long teamPostId;
	private String teamPostTitle;
	private String teamPostContent;
	private MemberVO memberVO;
	private ProjectVO projectVO;
}
