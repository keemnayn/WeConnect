package com.arezip.weconnect.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.arezip.weconnect.model.dto.ProposalDTO;
import com.arezip.weconnect.model.dto.TeamPostDTO;

@Mapper
public interface TeamPostMapper {
// 팀포스트 전체 조회
	List<TeamPostDTO> selectTeamPostList();

// 팀포스트 추가
	int insertTeamPost(TeamPostDTO teamPostDTO);

// 팀포스트 수정
	int updateTeamPost(TeamPostDTO teamPostDTO);


// 팀포스트 삭제
}
