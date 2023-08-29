package com.arezip.weconnect.test.mypost;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.arezip.weconnect.mapper.MyPostMapper;
import com.arezip.weconnect.model.dto.MyPostDTO;

import lombok.extern.slf4j.Slf4j;

@SpringBootTest
@Slf4j
public class MyPostMapperTest {
	@Autowired
	MyPostMapper myPostMapper;

// 개인게시글 전체 조회
	@Test
	void selectMyPostListTest() {
		List<MyPostDTO> list = myPostMapper.selectMyPostList();
		list.forEach(myPost -> log.info(myPost.toString()));
		assertNotNull(list);
	}

// 개인게시글 추가 mapper
	@Test
	void insertmyPostTest() {
		MyPostDTO myPostDTO = new MyPostDTO();
		myPostDTO.setMyPostTitle("매퍼제목");
		myPostDTO.setMyPostContent("매퍼내용");
		myPostDTO.setMemberId(141);
		int result = myPostMapper.insertMyPost(myPostDTO);
		log.info("result {}", result);
	}

// 개인게시글 수정 mapper
	@Test
	void updateMyPostTest() {
		MyPostDTO myPostDTO = new MyPostDTO();
		myPostDTO.setMyPostTitle("매퍼수정");
		myPostDTO.setMyPostContent("매퍼내용수정");
		myPostDTO.setMemberId(141);
		myPostDTO.setMyPostId(5);
		int result = myPostMapper.updateMyPost(myPostDTO);
		log.info("result {}", result);
	}

// 개인게시글 삭제 mapper	
	@Test
	void deleteMyPostTest() {
		MyPostDTO myPostDTO = new MyPostDTO();
		myPostDTO.setMemberId(141);
		myPostDTO.setMyPostId(5);
		int result = myPostMapper.deleteMyPost(myPostDTO);
		log.info("result {}", result);
	}
}
