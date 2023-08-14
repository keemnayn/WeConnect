package com.arezip.weconnect.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.arezip.weconnect.mapper.FreeBoardMapper;
import com.arezip.weconnect.model.vo.FreeBoardVO;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
@RequiredArgsConstructor
public class FreeBoardServiceImpl implements FreeBoardService {
	private final FreeBoardMapper freeBoardMapper;
	
	@Override
	public int postNewFreeBoard(FreeBoardVO freeBoardVO) {
		return freeBoardMapper.insertFreeBoard(freeBoardVO);
	}

	@Override
	public List<FreeBoardVO> getFreeBoardList() {
		return freeBoardMapper.getFreeBoardList();
	}

}
