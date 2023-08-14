package com.arezip.weconnect.model.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class NoticeVO {
	private long noticeId;
	private String noticeTitle;
	private String noticeContent;
	private long noticeViews;
	private String noticeCreate;
	private MemberVO memberVO;
	private String noticeCategory;
}
