package com.arezip.weconnect.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.arezip.weconnect.model.dto.MyPostDTO;
import com.arezip.weconnect.model.dto.TeamPostDTO;

@Mapper
public interface MyPostMapper {
// 개인게시글 전체 조회
	List<MyPostDTO> selectMyPostList();

// 개인게시글 추가
	int insertMyPost(MyPostDTO myPostDTO);

// 개인게시글 수정
	int updateMyPost(MyPostDTO myPostDTO);

// 개인게시글 삭제
	int deleteMyPost(MyPostDTO myPostDTO);
}
