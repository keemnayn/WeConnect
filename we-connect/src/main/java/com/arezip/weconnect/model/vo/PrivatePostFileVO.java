package com.arezip.weconnect.model.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PrivatePostFileVO {
	private long privatePostFileId;
	private String privatePostFileName;
	private String privatePostFilePath;
	private PrivatePostVO privatePostVO;
}
