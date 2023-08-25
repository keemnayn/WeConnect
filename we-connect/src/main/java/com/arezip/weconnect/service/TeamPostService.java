package com.arezip.weconnect.service;

import java.util.List;

import com.arezip.weconnect.model.dto.TeamPostDTO;

public interface TeamPostService {
// 팀포스트 전체 조회
	List<TeamPostDTO> getTeamPostList();

	/* int insertTeamPost(TeamPostDTO teamPostDTO); */
}
