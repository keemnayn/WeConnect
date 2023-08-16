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

import com.arezip.weconnect.model.dto.NoticeDTO;
import com.arezip.weconnect.service.admin.AdminNoticeService;

import lombok.extern.slf4j.Slf4j;

@SpringBootTest
@Slf4j
public class AdminNoticeServiceTest {
	@Autowired
	AdminNoticeService adminNoticeService;

//	공지사항 전체 리스트 service
	@Test
	void findAllNoticesTest() {
		List<NoticeDTO> list = adminNoticeService.findAllNotices();
		list.forEach(notice -> log.info(notice.toString()));
	}

//	공지사항 추가 service
	@Test
	@Transactional
	void addNoticeTest() {
		NoticeDTO noticeDTO = new NoticeDTO();
		noticeDTO.setNoticeTitle("서비스 테스트 제목");
		noticeDTO.setNoticeContent("서비스 테스트 내용");
		noticeDTO.setNoticeCategory("공지");
		noticeDTO.setMemberId(1);
		int result = adminNoticeService.addNotice(noticeDTO);
		assertNotEquals(0, result);
	}

//	공지사항 수정 service
	@Test
	void updateNoticeTest() {
		NoticeDTO noticeVO = new NoticeDTO();
		noticeVO.setNoticeId(17);
		noticeVO.setNoticeTitle("서비스 테스트 제목 수정");
		noticeVO.setNoticeContent("서비스 테스트 내용 수정");
		noticeVO.setNoticeCategory("공지");
		int result = adminNoticeService.updateNotice(noticeVO);
		assertNotEquals(0, result);
	}

//	공지사항 삭제 service
	@Test
	void deleteNoticeTest() {
		NoticeDTO noticeDTO = new NoticeDTO();
		noticeDTO.setNoticeId(44);
		int result = adminNoticeService.deleteNotice(noticeDTO);
		assertNotEquals(0, result);
	}

// 	공지사항 검색 service
	@Test
	void searchNoticesTest() {
		Map<String, String> searchParams = new HashMap<>();
		searchParams.put("searchType", "category");
		searchParams.put("searchText", "점검");
		List<NoticeDTO> list = adminNoticeService.searchNotice(searchParams);
// 		null 여부 확인
		assertNotNull(list);
// 		리스트가 비어있지 않은지 검증
		assertFalse(list.isEmpty());
//		결과 출력
		list.forEach(notice -> log.info(notice.toString()));
	}
}
