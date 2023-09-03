package com.arezip.weconnect.service;

import java.util.List;
import java.util.Map;

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

// 팀포스트 전체 조회
	@Override
	public List<TeamPostDTO> getTeamPostList() {
		return teamPostMapper.selectTeamPostList();
	}
	
// 팀포스트 추가
	@Override
	public int addTeamPost(TeamPostDTO teamPostDTO) {
		return teamPostMapper.insertTeamPost(teamPostDTO);
	}

// 팀포스트 수정
	@Override
	public int updateTeamPost(TeamPostDTO teamPostDTO) {
		return teamPostMapper.updateTeamPost(teamPostDTO);
	}

// 팀포스트 삭제
	@Override
	public int deleteTeamPost(TeamPostDTO teamPostDTO) {
		return teamPostMapper.deleteTeamPost(teamPostDTO);
	}

// 팀포스트 검색
	@Override
	public List<TeamPostDTO> searchProposal(Map<String, String> searchParams) {
		return teamPostMapper.searchTeamPost(searchParams);
	}
	

}
