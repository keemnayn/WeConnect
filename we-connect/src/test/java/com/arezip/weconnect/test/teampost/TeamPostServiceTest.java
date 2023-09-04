package com.arezip.weconnect.test.teampost;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import com.arezip.weconnect.model.dto.TeamPostDTO;
import com.arezip.weconnect.service.TeamPostService;

import lombok.extern.slf4j.Slf4j;

@SpringBootTest
@Slf4j
public class TeamPostServiceTest {
	@Autowired
	TeamPostService teamPostService;

// 팀게시글 전체 목록 service
	@Test
	void getTeamPostListTest() {
		List<TeamPostDTO> list = teamPostService.getTeamPostList();
		list.forEach(teampost -> log.info(teampost.toString()));
	}

// 팀게시글 추가 service
	@Test
	void addTeamPostTest() {
		TeamPostDTO teamPostDTO = new TeamPostDTO();
		teamPostDTO.setTeamPostTitle("네네네");
		teamPostDTO.setTeamPostContent("ㅇㅇㅇ");
		teamPostDTO.setMemberId(141);
		// teamPostDTO.setProjectId(24);
		int result = teamPostService.addTeamPost(teamPostDTO);
		log.info("result {}", result);
	}

// 팀게시글 수정 service
	@Test
	void updateTeamPostTest() {
		TeamPostDTO teamPostDTO = new TeamPostDTO();
		teamPostDTO.setTeamPostTitle("update서비ddd스");
		teamPostDTO.setTeamPostContent("테스트");
		teamPostDTO.setMemberId(141);
		teamPostDTO.setTeamPostId(144);
		int result = teamPostService.updateTeamPost(teamPostDTO);
		log.info("result {}", result);
	}

// 팀게시글 삭제 service	
	@Test
	void deleteTeamPostTest() {
		TeamPostDTO teamPostDTO = new TeamPostDTO();
		teamPostDTO.setMemberId(141);
		teamPostDTO.setTeamPostId(144);
		int result = teamPostService.deleteTeamPost(teamPostDTO);
		log.info("result {}", result);
	}

	// 리스트가 비어있지 않은지 검증 assertFalse(list.isEmpty());
	// 결과 출력 list.forEach(proposal -> log.info(proposal.toString()));

}