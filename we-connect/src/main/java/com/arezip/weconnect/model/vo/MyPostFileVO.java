package com.arezip.weconnect.model.vo;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

@Getter
@ToString
@RequiredArgsConstructor
public class MyPostFileVO {
	private final long myPostFileId;
	private final String myPostFileName;
	private final String myPostFilePath;
	private final MyPostVO myPostVO;
}
