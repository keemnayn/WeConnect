package com.arezip.weconnect.test.csyTest;

import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.List;

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

	@Test
	void getListTest() {
		List<FreeBoardDTO> list = freeBoardMapper.getFreeBoardList();
		list.forEach(freeBoard -> log.info(freeBoard.toString()));
		assertNotNull(list);
	}
	//게시물 상세 조회
	@Test
	void getBoardDetail() {
		long freeBoardId = 5;
		FreeBoardDTO boardDetail = freeBoardMapper.getFreeBoardDetail(freeBoardId);
		log.info(boardDetail.toString());
		assertNotNull(boardDetail);
	}
	//게시물 상세 페이지 댓글 조회
	@Test
	void getBoardDetailComment() {
		long freeBoardId = 5;
		List<FreeBoardCommentDTO> boardDetail = freeBoardService.getFreeBoardComment(freeBoardId);
		boardDetail.forEach(comment -> log.info(comment.toString()));
		assertNotNull(boardDetail);
	}
	//댓글 등록
	@Test
	void insertComment() {
		FreeBoardCommentDTO freeBoardCommentDTO = new FreeBoardCommentDTO();
		freeBoardCommentDTO.setFreeBoardCommentContent("ServiceTest");
		freeBoardCommentDTO.setMemberId(24);
		freeBoardCommentDTO.setFreeBoardId(61);
		int result = freeBoardService.insertFreeBoardComment(freeBoardCommentDTO);
		assertNotEquals(0, result);
	}
	//댓글 삭제 
	@Test
	void deleteComment() {
		FreeBoardCommentDTO freeBoardCommentDTO = new FreeBoardCommentDTO();
		freeBoardCommentDTO.setFreeBoardCommentId(42);
		int result = freeBoardService.deleteFreeBoardComment(freeBoardCommentDTO);
		assertNotEquals(0, result);
	}
}
