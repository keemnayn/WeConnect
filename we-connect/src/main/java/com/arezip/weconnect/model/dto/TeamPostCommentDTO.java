package com.arezip.weconnect.model.dto;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TeamPostCommentDTO {
	private long teamPostCommentId;
	private String teamPostCommentContent;
	private Date teamPostCommentDate;
	private TeamPostDTO teamPostVO;
	private MemberDTO memberVO;
}
