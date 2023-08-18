package com.arezip.weconnect.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.arezip.weconnect.model.dto.TeamPostDTO;

@Mapper
public interface TeamPostMapper {

	//List<TeamPostVO> getTeamPostList();
	TeamPostDTO getTeamPost(long teamPostId);

	/*
	 * int insertTeamPost(TeamPostDTO teamPostDTO);
	 */
}
