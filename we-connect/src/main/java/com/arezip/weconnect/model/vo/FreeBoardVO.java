package com.arezip.weconnect.model.vo;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FreeBoardVO {
	long freeBoardId;
	String freeBoardTitle;
	String freeBoardContent;
	Date freeBoardCreate;
	long freeBoardViews;
	MemberVO memberVO;
}
