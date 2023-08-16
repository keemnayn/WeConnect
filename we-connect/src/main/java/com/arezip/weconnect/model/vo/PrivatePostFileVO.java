package com.arezip.weconnect.model.vo;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

@Getter
@ToString
@RequiredArgsConstructor
public class PrivatePostFileVO {
	private final long privatePostFileId;
	private final String privatePostFileName;
	private final String privatePostFilePath;
	private final PrivatePostVO privatePostVO;
}
