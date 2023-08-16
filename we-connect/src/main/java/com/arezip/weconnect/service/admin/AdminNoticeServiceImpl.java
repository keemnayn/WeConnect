package com.arezip.weconnect.service.admin;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.arezip.weconnect.mapper.admin.AdminNoticeMapper;
import com.arezip.weconnect.model.dto.NoticeDTO;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AdminNoticeServiceImpl implements AdminNoticeService {
	private final AdminNoticeMapper adminNoticeMapper;

//	공지사항 전체 조회
	@Override
	public List<NoticeDTO> findAllNotices() {
		return adminNoticeMapper.selectAllNotices();
	}

//	공지사항 추가
	@Override
	public int addNotice(NoticeDTO noticeDTO) {
		return adminNoticeMapper.insertNotice(noticeDTO);
	}

//	공지사항 수정
	@Override
	public int updateNotice(NoticeDTO noticeDTO) {
		return adminNoticeMapper.updateNotice(noticeDTO);
	}

//	공지사항 삭제
	@Override
	public int deleteNotice(NoticeDTO noticeId) {
		return adminNoticeMapper.deleteNotice(noticeId);
	}

//	공지사항 검색
	@Override
	public List<NoticeDTO> searchNotice(Map<String, String> searchParams) {
		return adminNoticeMapper.selectNoticesBySearchCriteria(searchParams);
	}

}
