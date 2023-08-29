package com.arezip.weconnect.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.arezip.weconnect.mapper.MyPostMapper;
import com.arezip.weconnect.model.dto.MyPostDTO;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
@RequiredArgsConstructor
public class MyPostServiceImpl implements MyPostService {
	private final MyPostMapper myPostMapper;

// 개인게시글 전체 조회
	@Override
	public List<MyPostDTO> getMyPostList() {
		return myPostMapper.selectMyPostList();
	}
// 개인게시글 추가
	@Override
	public int addMyPost(MyPostDTO myPostDTO) {
		return myPostMapper.insertMyPost(myPostDTO);
	}
// 개인게시글 수정
	@Override
	public int updateMyPost(MyPostDTO myPostDTO) {
		return myPostMapper.updateMyPost(myPostDTO);
	}
// 개인게시글 삭제
	@Override
	public int deleteMyPost(MyPostDTO myPostDTO) {
		return myPostMapper.deleteMyPost(myPostDTO);
	}

}
