package com.arezip.weconnect.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.arezip.weconnect.mapper.NoticeMapper;
import com.arezip.weconnect.model.vo.NoticeVO;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
@RequiredArgsConstructor
public class NoticeServiceImpl implements NoticeService {
	private final NoticeMapper noticeMapper;

	@Override
	public List<NoticeVO> findAllNotices() {
		return noticeMapper.selectAllNotices();
	}

	@Override
	public int addNotice(NoticeVO noticeVO) {
		return noticeMapper.insertNotice(noticeVO);
	}

	@Override
	public int updateNotice(NoticeVO noticeVO) {
		return noticeMapper.updateNotice(noticeVO);
	}

	@Override
	public int deleteNotice(long noticeId) {
		return noticeMapper.deleteNotice(noticeId);
	}

	@Override
	public List<NoticeVO> searchNotice(Map<String, String> searchParams) {
		return noticeMapper.selectNoticesBySearchCriteria(searchParams);
	}
}