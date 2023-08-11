package com.arezip.weconnect.model.vo;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TeamPostCommentVO {
	private long teamPostCommentId;
	private String teamPostCommentContent;
	private Date teamPostCommentDate;
	private TeamPostVO teamPostVO;
	private MemberVO memberVO;
}
