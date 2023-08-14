package com.arezip.weconnect.model.vo;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PrivatePostVO {
	private long privatePostId;
	private String privatePostTitle;
	private String privatePostContent;
	private Date privatePostDate;
	private MemberVO memberVO;
}
