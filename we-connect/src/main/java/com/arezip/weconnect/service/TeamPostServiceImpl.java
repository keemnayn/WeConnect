package com.arezip.weconnect.service;

import org.springframework.stereotype.Service;

import com.arezip.weconnect.mapper.TeamPostMapper;
import com.arezip.weconnect.model.dto.TeamPostDTO;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
@RequiredArgsConstructor
public class TeamPostServiceImpl implements TeamPostService {
	private final TeamPostMapper teamPostMapper;

	@Override
	public TeamPostDTO getTeamPost(long teamPostId) {
		return teamPostMapper.getTeamPost(teamPostId);
	}

	/*
	 * @Override public int insertTeamPost(TeamPostDTO teamPostDTO) { return
	 * teamPostMapper.insertTeamPost(teamPostDTO); }
	 */

}
