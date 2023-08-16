package com.arezip.weconnect.service;

import java.util.List;
import java.util.Map;

import com.arezip.weconnect.model.dto.NoticeDTO;

public interface NoticeService {
	List<NoticeDTO> findAllNotices();

	int addNotice(NoticeDTO noticeDTO);

	int updateNotice(NoticeDTO noticeDTO);

	int deleteNotice(long noticeId);

	List<NoticeDTO> searchNotice(Map<String, String> searchParams);
}