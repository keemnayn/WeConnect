package com.arezip.weconnect.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FreeBoardCommentDTO {
	private long freeBoardId;
	private long freeBoardCommentId;
	private String freeBoardCommentContent;
	private String freeBoardCommentDate;
	private String memberName;
	private long memberId;
	private long CMemberId;
}