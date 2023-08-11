package com.arezip.weconnect.model.vo;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FreeBoardCommentVO {
	private long freeBoardCommentId;
	private String freeBoardCommentContent;
	private Date freeBoardCommentDate;
	private MemberVO memberVO;
	private FreeBoardVO freeBoardVO;
}