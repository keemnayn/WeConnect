package com.arezip.weconnect.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.arezip.weconnect.model.dto.NoticeDTO;

@Mapper
public interface NoticeMapper {
	//공지사항 조회
	List<NoticeDTO> getNoticeList();

	//공지사항 검색
	List<NoticeDTO> selectNoticesBySearchCriteria(Map<String, String> searchParams);
}
