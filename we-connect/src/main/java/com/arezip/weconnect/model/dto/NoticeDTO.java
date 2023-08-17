package com.arezip.weconnect.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class NoticeDTO {
	private long noticeId;
	private String noticeTitle;
	private String noticeContent;
	private long noticeViews;
	private String noticeCreate;
	private String noticeCategory;
	private long memberId;
}