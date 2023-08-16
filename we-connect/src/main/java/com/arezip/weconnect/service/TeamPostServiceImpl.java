package com.arezip.weconnect.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.arezip.weconnect.mapper.TeamPostMapper;
import com.arezip.weconnect.model.vo.TeamPostVO;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
@RequiredArgsConstructor
public class TeamPostServiceImpl implements TeamPostService {
	private final TeamPostMapper teamPostMapper;

	@Override
	public List<TeamPostVO> getTeamPostList() {
		return teamPostMapper.getTeamPostList();
	}
}
