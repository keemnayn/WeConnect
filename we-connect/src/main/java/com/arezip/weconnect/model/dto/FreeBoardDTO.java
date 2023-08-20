package com.arezip.weconnect.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FreeBoardDTO {
	private long freeBoardId;
	private String freeBoardTitle;
	private String freeBoardContent;
	private String freeBoardCreate;
	private String freeBoardFileName;
	private long freeBoardViews;
	private String memberName;
	private long memberId;
}
