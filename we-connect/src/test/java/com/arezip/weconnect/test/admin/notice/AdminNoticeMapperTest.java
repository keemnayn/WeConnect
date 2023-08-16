package com.arezip.weconnect.test.admin.notice;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import com.arezip.weconnect.mapper.admin.AdminNoticeMapper;
import com.arezip.weconnect.model.dto.NoticeDTO;

import lombok.extern.slf4j.Slf4j;

@SpringBootTest
@Slf4j
class AdminNoticeMapperTest {
	@Autowired
	AdminNoticeMapper adminNoticeMapper;

//	공지사항 전체 리스트 mapper
	@Test
	void selectAllNoticesTest() {
//		List<NoticeDTO> list = adminNoticeMapper.selectAllNotices();
//		list.forEach(notice -> log.info(notice.toString()));
		List<NoticeDTO> list = adminNoticeMapper.selectAllNotices();
		list.forEach(notice -> log.info(notice.toString()));
	}

//	공지사항 추가 mapper
	@Test
	@Transactional // 테스트 이후 롤백을 위해 추가
	void insertNoticeTest() {
		NoticeDTO noticeDTO = new NoticeDTO();
		noticeDTO.setNoticeTitle("매퍼 테스트 제목");
		noticeDTO.setNoticeContent("매퍼 테스트 내용");
		noticeDTO.setNoticeCategory("공지");
		noticeDTO.setMemberId(1);
		int result = adminNoticeMapper.insertNotice(noticeDTO);
		assertNotEquals(0, result);
	}

//	공지사항 수정 mapper
	@Test
	void updateNoticeTest() {
		NoticeDTO noticeDTO = new NoticeDTO();
		noticeDTO.setNoticeId(15);
		noticeDTO.setNoticeTitle("매퍼 테스트 제목 수정");
		noticeDTO.setNoticeContent("매퍼 테스트 내용 수정");
		noticeDTO.setNoticeCategory("점검");
		int result = adminNoticeMapper.updateNotice(noticeDTO);
		assertNotEquals(0, result);
	}

//	공지사항 삭제 mapper
	@Test
	void deleteNoticeTest() {
		NoticeDTO noticeDTO = new NoticeDTO();
		noticeDTO.setNoticeId(44);
		int result = adminNoticeMapper.deleteNotice(noticeDTO);
		assertNotEquals(0, result);
	}

// 	공지사항 검색 mapper
	@Test
	void selectNoticesBySearchCriteriaTest() {
		Map<String, String> searchParams = new HashMap<>();
		searchParams.put("searchType", "all");
		searchParams.put("searchText", "입니다");

		List<NoticeDTO> list = adminNoticeMapper.selectNoticesBySearchCriteria(searchParams);

// 		null 여부 확인
		assertNotNull(list);

// 		리스트가 비어있지 않은지 검증
		assertFalse(list.isEmpty());

//		결과 출력
		list.forEach(notice -> log.info(notice.toString()));
	}

}
