package com.arezip.weconnect.model.vo;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

@Getter
@ToString
@RequiredArgsConstructor
public class TeamPostFileVO {
	private final long teamPostFileId;
	private final String teamPostFileName;
	private final String teamPostFilePath;
	private final TeamPostVO teamPostVO;
}
