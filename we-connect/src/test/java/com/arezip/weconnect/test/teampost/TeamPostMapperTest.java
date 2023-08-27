package com.arezip.weconnect.test.teampost;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.arezip.weconnect.mapper.TeamPostMapper;
import com.arezip.weconnect.model.dto.TeamPostDTO;

import lombok.extern.slf4j.Slf4j;

@SpringBootTest
@Slf4j
public class TeamPostMapperTest {
	@Autowired
	TeamPostMapper teamPostMapper;

// 팀포스트 전체 조회
	@Test
	void selectTeamPostListTest() {
		List<TeamPostDTO> list = teamPostMapper.selectTeamPostList();
		list.forEach(teamPost -> log.info(teamPost.toString()));
		assertNotNull(list);
	}

// 팀포스트 추가 mapper
	@Test
	void insertTeamPostTest() {
		TeamPostDTO teamPostDTO = new TeamPostDTO();
		teamPostDTO.setTeamPostTitle("매퍼 테스트d");
		teamPostDTO.setTeamPostContent("매퍼 테스트dd");
		teamPostDTO.setMemberId(141);
		teamPostDTO.setProjectId(44);
		int result = teamPostMapper.insertTeamPost(teamPostDTO);
		log.info("result {}", result);

	}

}