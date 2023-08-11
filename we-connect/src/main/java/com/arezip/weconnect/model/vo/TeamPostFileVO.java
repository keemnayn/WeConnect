package com.arezip.weconnect.model.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TeamPostFileVO {
	private long teamPostFileId;
	private String teamPostFileName;
	private String teamPostFilePath;
	private TeamPostVO teamPostVO;
}
