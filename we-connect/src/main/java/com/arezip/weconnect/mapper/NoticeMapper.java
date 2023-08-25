package com.arezip.weconnect.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.arezip.weconnect.model.dto.NoticeDTO;

@Mapper
public interface NoticeMapper {
	//공지사항 조회
	List<NoticeDTO> getNoticeList();
}
