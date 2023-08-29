package com.arezip.weconnect.service;

import java.util.List;

import com.arezip.weconnect.model.dto.TeamPostDTO;

public interface TeamPostService {
// 팀포스트 전체 조회
	List<TeamPostDTO> getTeamPostList();

// 팀포스트 추가
	int addTeamPost(TeamPostDTO teamPostDTO);

// 팀포스트 수정
	int updateTeamPost(TeamPostDTO teamPostDTO);
	
// 팀포스트 삭제
	int deleteTeamPost(TeamPostDTO teamPostDTO);
}
