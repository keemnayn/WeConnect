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

	@Override
	public List<NoticeDTO> findAllNotices() {
		return noticeMapper.selectAllNotices();
	}

	@Override
	public int addNotice(NoticeDTO noticeDTO) {
		return noticeMapper.insertNotice(noticeDTO);
	}

	@Override
	public int updateNotice(NoticeDTO noticeDTO) {
		return noticeMapper.updateNotice(noticeDTO);
	}

	@Override
	public int deleteNotice(long noticeId) {
		return noticeMapper.deleteNotice(noticeId);
	}

	@Override
	public List<NoticeDTO> searchNotice(Map<String, String> searchParams) {
		return noticeMapper.selectNoticesBySearchCriteria(searchParams);
	}
}