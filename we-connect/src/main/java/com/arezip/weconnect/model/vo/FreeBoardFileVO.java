package com.arezip.weconnect.model.vo;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

@Getter
@ToString
@RequiredArgsConstructor
public class FreeBoardFileVO {
	private final long freeBoardFileId;
	private final String freeBoardFile_name;
	private final String freeBoardFilePath;
	private final FreeBoardVO freeBoardVO;
}
