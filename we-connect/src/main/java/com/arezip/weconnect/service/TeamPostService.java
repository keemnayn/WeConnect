package com.arezip.weconnect.service;

import java.util.List;

import com.arezip.weconnect.mapper.TeamPostMapper;
import com.arezip.weconnect.model.vo.TeamPostVO;

public interface TeamPostService {

	static List<TeamPostVO> getTeamPostList() {
		return TeamPostMapper.getTeamPostList();
	}

}
