package com.arezip.weconnect.mapper.admin;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.arezip.weconnect.model.dto.NoticeDTO;

@Mapper
public interface AdminNoticeMapper {
//	공지사항 전체 조회
	List<NoticeDTO> selectAllNotices();

//	공지사항 추가
	int insertNotice(NoticeDTO noticeDTO);

//	공지사항 수정
	int updateNotice(NoticeDTO noticeDTO);

//	공지사항 삭제
	int deleteNotice(NoticeDTO noticeDTO);

//	공지사항 검색
	List<NoticeDTO> selectNoticesBySearchCriteria(Map<String, String> searchParams);
}
