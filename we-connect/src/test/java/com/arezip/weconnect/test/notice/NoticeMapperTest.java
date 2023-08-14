package com.arezip.weconnect.test.notice;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.arezip.weconnect.mapper.NoticeMapper;
import com.arezip.weconnect.model.vo.MemberVO;
import com.arezip.weconnect.model.vo.NoticeVO;

import lombok.extern.slf4j.Slf4j;

@SpringBootTest
@Slf4j
class NoticeMapperTest {
	@Autowired
	NoticeMapper noticeMapper;

//	공지사항 전체 리스트 mapper
	@Test
	void selectAllNoticesTest() {
		List<NoticeVO> list = noticeMapper.selectAllNotices();
		list.forEach(notice -> log.info(notice.toString()));
	}

//	공지사항 추가 mapper
	@Test
//	@Transactional // 테스트 이후 롤백을 위해 추가
	void insertNoticeTest() {
		NoticeVO noticeVO = new NoticeVO();
		noticeVO.setNoticeTitle("매퍼 테스트 제목");
		noticeVO.setNoticeContent("매퍼 테스트 내용");
		noticeVO.setNoticeCategory("공지");
		MemberVO memberVO = new MemberVO();
		memberVO.setMemberId(1);
		noticeVO.setMemberVO(memberVO);
		int result = noticeMapper.insertNotice(noticeVO);
		assertNotEquals(0, result);
	}

//	공지사항 수정 mapper
	@Test
	void updateNoticeTest() {
		NoticeVO noticeVO = new NoticeVO();
		noticeVO.setNoticeId(15);
		noticeVO.setNoticeTitle("매퍼 테스트 제목 수정");
		noticeVO.setNoticeContent("매퍼 테스트 내용 수정");
		noticeVO.setNoticeCategory("점검");
		int result = noticeMapper.updateNotice(noticeVO);
		assertNotEquals(0, result);
	}

//	공지사항 삭제 mapper
	@Test
	void deleteNoticeTest() {
		long noticeId = 16;
		int result = noticeMapper.deleteNotice(noticeId);
		assertNotEquals(0, result);
	}

// 	공지사항 검색 mapper
	@Test
	void selectNoticesBySearchCriteriaTest() {
		Map<String, String> searchParams = new HashMap<>();
		searchParams.put("searchType", "all");
		searchParams.put("searchText", "입니다");

		List<NoticeVO> list = noticeMapper.selectNoticesBySearchCriteria(searchParams);

// 		null 여부 확인
		assertNotNull(list);

// 		리스트가 비어있지 않은지 검증
		assertFalse(list.isEmpty());

//		결과 출력
		list.forEach(notice -> log.info(notice.toString()));
	}

}
