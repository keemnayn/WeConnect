package com.arezip.weconnect.test.freeBoard;

import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.arezip.weconnect.mapper.FreeBoardMapper;
import com.arezip.weconnect.model.dto.FreeBoardCommentDTO;
import com.arezip.weconnect.model.dto.FreeBoardDTO;
import com.arezip.weconnect.service.FreeBoardService;

import lombok.extern.slf4j.Slf4j;

@SpringBootTest
@Slf4j
public class FreeBoardTest {
	@Autowired
	FreeBoardMapper freeBoardMapper;
	
	@Autowired
	FreeBoardService freeBoardService;
	
	//게시물 등록
	@Test
	void insertFreeBoardPost() {
		FreeBoardDTO freeBoardDTO = new FreeBoardDTO();
		freeBoardDTO.setFreeBoardTitle("TESTTitle2");
		freeBoardDTO.setFreeBoardContent("TESTContent2");
		freeBoardDTO.setFreeBoardFileName("TEST2.jpg");
		freeBoardDTO.setMemberId(24);
		int result = freeBoardMapper.insertFreeBoard(freeBoardDTO);
		assertNotEquals(0, result);
	}

	//	검색
	@Test
	void searchFreeBoardListTest() {
		String searchType = "all";
		String searchText = "Title";
		Map<String, String> searchParams = new HashMap<>();
		searchParams.put("searchType", searchType);
		searchParams.put("searchText", searchText);
		List<FreeBoardDTO> list = freeBoardService.searchFreeBoardList(searchParams);
		list.forEach(freeBoards -> log.info(freeBoards.toString()));
		assertNotNull(list);
	}
	
	@Test
	void getListTest() {
		List<FreeBoardDTO> list = freeBoardMapper.getFreeBoardList();
		list.forEach(freeBoard -> log.info(freeBoard.toString()));
		assertNotNull(list);
	}
	//게시물 상세 조회
	@Test
	void getBoardDetail() {
		long freeBoardId = 97;
		FreeBoardDTO boardDetail = freeBoardService.getFreeBoardDetail(freeBoardId);
		log.info(boardDetail.toString());
		assertNotNull(boardDetail);
	}
	//게시물 상세 조회
	@Test
	void getBoardDetailComment() {
		long freeBoardId = 97;
		List<FreeBoardCommentDTO> boardDetail = freeBoardService.getFreeBoardComment(freeBoardId);
		log.info(boardDetail.toString());
		assertNotNull(boardDetail);
	}
	
	//게시물 상세 페이지 댓글 조회
	@Test
	void getBoardDetailComment1() {
		long freeBoardId = 5;
		List<FreeBoardCommentDTO> boardDetail = freeBoardService.getFreeBoardComment(freeBoardId);
		boardDetail.forEach(comment -> log.info(comment.toString()));
		assertNotNull(boardDetail);
	}
	//댓글 등록
	@Test
	void insertComment() {
		long memberId = 142;
		long freeBoardId = 101;
		String freeBoardCommentContent = "unitTest";
		int result = freeBoardService.insertFreeBoardComment(freeBoardCommentContent,memberId,freeBoardId);
		assertNotEquals(0, result);
	}
	//댓글 삭제 
	@Test
	void deleteComment() {
		long freeBoardCommentId = 455;
		int result = freeBoardService.deleteFreeBoardComment(freeBoardCommentId);
		assertNotEquals(0, result);
	}
	//댓글 수정
	@Test
	void updateComment() {
		FreeBoardCommentDTO freeBoardCommentDTO = new FreeBoardCommentDTO();
		freeBoardCommentDTO.setFreeBoardCommentId(455);
		freeBoardCommentDTO.setFreeBoardCommentContent("test수정test");
		int result = freeBoardService.updateFreeBoardComment(freeBoardCommentDTO);
		assertNotEquals(0, result);
	}
}
