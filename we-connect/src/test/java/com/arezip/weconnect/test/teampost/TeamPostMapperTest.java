package com.arezip.weconnect.test.teampost;

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
	void getTeamPost(long teamPostId) {
		TeamPostDTO teamPost = teamPostMapper.getTeamPost(teamPostId);
		}
}
