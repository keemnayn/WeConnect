package com.arezip.weconnect.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.arezip.weconnect.model.dto.TeamPostDTO;

@Mapper
public interface TeamPostMapper {

	 List<TeamPostDTO> getTeamPostList(long memberId);

	TeamPostDTO getTeamPost(long teamPostId);


	// int insertTeamPost(TeamPostDTO teamPostDTO);

}
