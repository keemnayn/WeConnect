package com.arezip.weconnect.test.member;

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
	
	@Test
	void getTeamPostListTest() {
		long memberId = 44;
		List<TeamPostDTO> list = teamPostMapper.getTeamPostList(memberId);
		list.forEach(teamPost -> log.info(teamPost.toString()));
		assertNotNull(list);
	}
}
