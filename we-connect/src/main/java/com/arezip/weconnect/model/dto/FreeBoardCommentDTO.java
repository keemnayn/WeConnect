package com.arezip.weconnect.model.dto;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FreeBoardCommentDTO {
	private long freeBoardCommentId;
	private String freeBoardCommentContent;
	private Date freeBoardCommentDate;
	private MemberDTO memberVO;
	private FreeBoardDTO freeBoardVO;
}