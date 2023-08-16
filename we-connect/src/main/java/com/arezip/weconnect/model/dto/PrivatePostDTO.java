package com.arezip.weconnect.model.dto;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PrivatePostDTO {
	private long privatePostId;
	private String privatePostTitle;
	private String privatePostContent;
	private Date privatePostDate;
	private MemberDTO memberVO;
}
