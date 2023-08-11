package com.arezip.weconnect.model.vo;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FreeBoardVO {
	private long freeBoardId;
	private String freeBoardTitle;
	private String freeBoardContent;
	private Date freeBoardCreate;
	private long freeBoardViews;
	private MemberVO memberVO;
}
