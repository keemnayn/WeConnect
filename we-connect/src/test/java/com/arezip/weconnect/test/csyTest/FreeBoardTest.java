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
		freeBoardDTO.setFreeBoardTitle("StTestTitl4");
		freeBoardDTO.setFreeBoardContent("StTestContent4");
//		freeBoardDTO.setFreeBoardFileName("a3.jpg");
		freeBoardDTO.setMemberId(24);
		int result = freeBoardService.insertFreeBoard(freeBoardDTO);
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
		long freeBoardId = 3;
		FreeBoardDTO boardDetail = freeBoardService.getFreeBoardDetail(freeBoardId);
		log.info(boardDetail.toString());
		assertNotNull(boardDetail);
	}
	//게시물 상세 페이지 댓글 조회
	@Test
	void getBoardDetailComment() {
		long freeBoardId = 5;
		List<FreeBoardCommentDTO> boardDetail = freeBoardService.getFreeBoardDetailComment(freeBoardId);
		boardDetail.forEach(comment -> log.info(comment.toString()));
		assertNotNull(boardDetail);
	}
}
