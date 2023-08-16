package com.arezip.weconnect.service.admin;

import java.util.List;
import java.util.Map;

import com.arezip.weconnect.model.dto.NoticeDTO;

public interface AdminNoticeService {
//	공지사항 전체 조회
	List<NoticeDTO> findAllNotices();

//	공지사항 추가
	int addNotice(NoticeDTO noticeDTO);

//	공지사항 수정
	int updateNotice(NoticeDTO noticeDTO);

//	공지사항 삭제
	int deleteNotice(NoticeDTO noticeDTO);

//	공지사항 검색
	List<NoticeDTO> searchNotice(Map<String, String> searchParams);
}
