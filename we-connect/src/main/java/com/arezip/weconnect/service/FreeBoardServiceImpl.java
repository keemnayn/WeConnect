package com.arezip.weconnect.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.arezip.weconnect.mapper.FreeBoardMapper;
import com.arezip.weconnect.model.dto.FreeBoardCommentDTO;
import com.arezip.weconnect.model.dto.FreeBoardDTO;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
@RequiredArgsConstructor
public class FreeBoardServiceImpl implements FreeBoardService {
	private final FreeBoardMapper freeBoardMapper;
	
	@Override
	public List<FreeBoardDTO> getFreeBoardList() {
		return freeBoardMapper.getFreeBoardList();
	}

	@Override
	public int insertFreeBoard(FreeBoardDTO freeBoardDTO) {
		return freeBoardMapper.insertFreeBoard(freeBoardDTO);
	}

	@Override
	public FreeBoardDTO getFreeBoardDetail(long freeBoardId) {
		return freeBoardMapper.getFreeBoardDetail(freeBoardId);
	}

	@Override
	public int updateFreeBoard(FreeBoardDTO freeBoardDTO) {
		return freeBoardMapper.updateFreeBoard(freeBoardDTO);
	}

	@Override
	public int deleteFreeBoard(FreeBoardDTO freeBoardDTO) {
		return freeBoardMapper.deleteFreeBoard(freeBoardDTO);
	}
	
	@Override
	public List<FreeBoardCommentDTO> getFreeBoardComment(long freeBoardId) {
		return freeBoardMapper.getFreeBoardComment(freeBoardId);
	}

	@Override
	public int insertFreeBoardComment(String freeBoardCommentContent, long memberId, long freeBoardId) {
		return freeBoardMapper.insertFreeBoardComment(freeBoardCommentContent,memberId,freeBoardId);
	}
//	@Override
//	public int insertFreeBoardComment(FreeBoardCommentDTO freeBoardCommentDTO) {
//		return freeBoardMapper.insertFreeBoardComment(freeBoardCommentDTO);
//	}

	@Override
	public int updateFreeBoardComment(FreeBoardCommentDTO freeBoardCommentDTO) {
		return freeBoardMapper.updateFreeBoardComment(freeBoardCommentDTO);
	}

//	@Override
//	public int deleteFreeBoardComment(FreeBoardCommentDTO freeBoardCommentDTO) {
//		return freeBoardMapper.deleteFreeBoardComment(freeBoardCommentDTO);
//	}
	@Override
	public int deleteFreeBoardComment(long freeBoardCommentId) {
		return freeBoardMapper.deleteFreeBoardComment(freeBoardCommentId);
	}
	@Override
	public List<FreeBoardDTO> searchFreeBoardList(Map<String, String> searchParams) {
		return freeBoardMapper.searchFreeBoardList(searchParams);
	}

	@Override
	public int updateFreeBoardViews(long freeBoardId) {
		return freeBoardMapper.updateFreeBoardViews(freeBoardId);
	}

	


}
