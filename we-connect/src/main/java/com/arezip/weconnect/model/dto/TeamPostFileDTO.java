package com.arezip.weconnect.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TeamPostFileDTO {
	private long teamPostFileId;
	private String teamPostFileName;
	private String teamPostFilePath;
	private TeamPostDTO teamPostVO;
}
