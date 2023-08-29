package com.arezip.weconnect.service;

import java.util.List;

import com.arezip.weconnect.model.dto.MyPostDTO;

public interface MyPostService {
// 개인게시글 전체 조회
	List<MyPostDTO> getMyPostList();

// 개인게시글 추가
	int addMyPost(MyPostDTO myPostDTO);

// 개인게시글 수정
	int updateMyPost(MyPostDTO myPostDTO);

// 개인게시글 삭제
	int deleteMyPost(MyPostDTO myPostDTO);
}
