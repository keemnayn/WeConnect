package com.arezip.weconnect.model.dto;

import java.util.Date;

import com.arezip.weconnect.model.vo.MemberVO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MyPostDTO {
	private long myPostId;
	private String myPostTitle;
	private String myPostContent;
	private Date myPostDate;
	private MemberVO memberVO;
}
