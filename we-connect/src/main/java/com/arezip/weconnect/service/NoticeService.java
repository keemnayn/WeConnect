package com.arezip.weconnect.service;

import java.util.List;
import java.util.Map;

import com.arezip.weconnect.model.vo.NoticeVO;

public interface NoticeService {
	List<NoticeVO> findAllNotices();

	int addNotice(NoticeVO noticeVO);

	int updateNotice(NoticeVO noticeVO);

	int deleteNotice(long noticeId);

	List<NoticeVO> searchNotice(Map<String, String> searchParams);
}