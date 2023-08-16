package com.arezip.weconnect.model.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FreeBoardAndMemberVO {
	private long freeBoardId;
	private String freeBoardTitle;
	private String freeBoardCreate;
	private String memberName;
}
