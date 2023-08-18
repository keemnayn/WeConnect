package com.arezip.weconnect.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data 
@AllArgsConstructor
@NoArgsConstructor 
public class FreeBoardDTO {  
	private long freeBoardId; 
	private String freeBoardContent;  
	private String freeBoardTitle;
	private String freeBoardCreate;
	private String memberName;
	// 게시글 상세 조회시 필요할 지도 모르는 컬럼
	private long freeBoardViews;
	private long memberId;
}
