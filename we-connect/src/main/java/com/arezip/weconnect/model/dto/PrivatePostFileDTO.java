package com.arezip.weconnect.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PrivatePostFileDTO {
	private long privatePostFileId;
	private String privatePostFileName;
	private String privatePostFilePath;
	private PrivatePostDTO privatePostVO;
}
