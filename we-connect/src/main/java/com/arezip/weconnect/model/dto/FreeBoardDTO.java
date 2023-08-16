package com.arezip.weconnect.model.dto;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

@Getter
@ToString
@RequiredArgsConstructor
public class FreeBoardDTO {
	private long freeBoardId;
	private String freeBoardTitle;
	private String freeBoardCreate;
	private String memberName;
}