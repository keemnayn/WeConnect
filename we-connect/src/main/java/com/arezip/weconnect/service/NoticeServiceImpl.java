package com.arezip.weconnect.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.arezip.weconnect.mapper.NoticeMapper;
import com.arezip.weconnect.model.dto.NoticeDTO;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
@RequiredArgsConstructor
public class NoticeServiceImpl implements NoticeService {
	private final NoticeMapper noticeMapper;
	
	//공지사항 전체 조회
	@Override
	public List<NoticeDTO> getNoticeList() {
		return noticeMapper.getNoticeList();
	}

	@Override
	public List<NoticeDTO> searchNotice(Map<String, String> searchParams) {
		return noticeMapper.selectNoticesBySearchCriteria(searchParams);
	}

}