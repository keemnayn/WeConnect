package com.arezip.weconnect.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MyPostFileDTO {
	private long myPostFileId;
	private String myPostFileName;
	private String myPostFilePath;
	private MyPostDTO myPostVO;
}
