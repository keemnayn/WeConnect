package com.arezip.weconnect.model.dto;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TeamPostDTO {
	private long teamPostId;
	private String teamPostTitle;
	private String teamPostContent;
	private String teamPostCreateDate;
	private String memberName;
	private String ProjectName;
	private String departmentName;
	private long memberId;
	private long projectId;
}
