package com.arezip.weconnect.model.vo;

import java.util.Date;

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
	private long teamPostViews;
	private Date teamPostCreate;
	private MemberVO memberVO;
	private ProjectVO projectVO;
	
}
