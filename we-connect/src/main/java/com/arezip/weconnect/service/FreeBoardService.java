package com.arezip.weconnect.service;

import java.util.List;

import com.arezip.weconnect.model.vo.FreeBoardAndMemberVO;
import com.arezip.weconnect.model.vo.FreeBoardVO;

public interface FreeBoardService {
	List<FreeBoardAndMemberVO> getFreeBoardList();
	int postNewFreeBoard(FreeBoardVO freeBoardVO);
}
