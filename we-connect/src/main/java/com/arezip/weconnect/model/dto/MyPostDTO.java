package com.arezip.weconnect.model.dto;

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
	private String myPostDate;
	private long memberId;
}
