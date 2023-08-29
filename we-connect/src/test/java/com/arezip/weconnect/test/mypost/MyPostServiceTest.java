package com.arezip.weconnect.test.mypost;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.arezip.weconnect.model.dto.MyPostDTO;
import com.arezip.weconnect.service.MyPostService;

import lombok.extern.slf4j.Slf4j;

@SpringBootTest
@Slf4j
public class MyPostServiceTest {
	@Autowired
	MyPostService myPostService;

// 개인게시글 전체 목록 service
	@Test
	void getTeamPostListTest() {
		List<MyPostDTO> list = myPostService.getMyPostList();
		list.forEach(teampost -> log.info(teampost.toString()));
	}

// 개인게시글 추가 service
	@Test
	void addTeamPostTest() {
		MyPostDTO myPostDTO = new MyPostDTO();
		myPostDTO.setMyPostTitle("서비스제목");
		myPostDTO.setMyPostContent("서비스내용");
		myPostDTO.setMemberId(141);
		int result = myPostService.addMyPost(myPostDTO);
		log.info("result {}", result);
	}

// 개인게시글 수정 service
	@Test
	void updateTeamPostTest() {
		MyPostDTO myPostDTO = new MyPostDTO();
		myPostDTO.setMyPostTitle("서비스수정");
		myPostDTO.setMyPostContent("서비스수정");
		myPostDTO.setMemberId(141);
		myPostDTO.setMyPostId(6);
		int result = myPostService.updateMyPost(myPostDTO);
		log.info("result {}", result);
	}

// 개인게시글 삭제 service
	@Test
	void deleteTeamPostTest() {
		MyPostDTO myPostDTO = new MyPostDTO();
		myPostDTO.setMemberId(141);
		myPostDTO.setMyPostId(6);
		int result = myPostService.deleteMyPost(myPostDTO);
		log.info("result {}", result);
	}

}
