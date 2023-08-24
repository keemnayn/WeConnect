package com.arezip.weconnect.service;

import java.util.List;

import com.arezip.weconnect.model.dto.TeamPostDTO;

public interface TeamPostService {
	//TeamPostDTO getTeamPost(long teamPostId);

	List<TeamPostDTO> getTeamPostList(long memberId);
 
	/* int insertTeamPost(TeamPostDTO teamPostDTO); */
}
