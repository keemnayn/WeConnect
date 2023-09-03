package com.arezip.weconnect.service;

import java.util.List;
import java.util.Map;

import com.arezip.weconnect.model.dto.NoticeDTO;

public interface NoticeService {
	//공지사항 전체 검색
	List<NoticeDTO> getNoticeList();
	
	//공지사항 검색
	List<NoticeDTO> searchNotice(Map<String, String> searchParams);
}