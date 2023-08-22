package com.arezip.weconnect.service;

import java.util.List;

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
	public List<FreeBoardCommentDTO> getFreeBoardComment(long freeBoardId) {
		return freeBoardMapper.getFreeBoardComment(freeBoardId);
	}

	@Override
	public int insertFreeBoardComment(FreeBoardCommentDTO freeBoardCommentDTO) {
		return freeBoardMapper.insertFreeBoardComment(freeBoardCommentDTO);
	}

	@Override
	public int updateFreeBoardComment(FreeBoardCommentDTO freeBoardCommentDTO) {
		return freeBoardMapper.updateFreeBoardComment(freeBoardCommentDTO);
	}

	@Override
	public int deleteFreeBoardComment(FreeBoardCommentDTO freeBoardCommentDTO) {
		return freeBoardMapper.deleteFreeBoardComment(freeBoardCommentDTO);
	}

}
