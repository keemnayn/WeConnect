package com.arezip.weconnect.service;

import java.util.List;

import com.arezip.weconnect.model.dto.TeamPostDTO;
import com.arezip.weconnect.model.vo.TeamPostVO;

public interface TeamPostService {

	List<TeamPostVO> getTeamPostList();
	
	int insertTeamPost(TeamPostDTO teamPostDTO);
}
