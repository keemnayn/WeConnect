package com.arezip.weconnect.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.arezip.weconnect.model.dto.FreeBoardCommentDTO;
import com.arezip.weconnect.model.dto.TeamPostCommentDTO;
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
	int deleteTeamPost(TeamPostDTO teamPostDTO);

// 팀포스트 검색
	List<TeamPostDTO> searchTeamPost(Map<String, String> searchParams);

	// 팀포스트 댓글 등록
	int insertTeamPostComment(String teamPostCommentContent, long memberId, long teamPostId);

	// 팀포스트 댓글 조회
	List<TeamPostCommentDTO> getTeamPostComment(long teamPostId);

	// 팀포스트 댓글 수정
	int updateTeamPostComment(TeamPostCommentDTO teamPostCommentDTO);

	// 팀포스트 댓글 삭제
	int deleteTeamPostComment(long teamPostCommentId);

}
