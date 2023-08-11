package com.arezip.weconnect.model.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FreeBoardFileVO {
	private long freeBoardFileId;
	private String freeBoardFile_name;
	private String freeBoardFilePath;
	private FreeBoardVO freeBoardVO;
}
