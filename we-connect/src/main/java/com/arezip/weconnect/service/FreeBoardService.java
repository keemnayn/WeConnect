package com.arezip.weconnect.service;

import java.util.List;

import com.arezip.weconnect.model.dto.FreeBoardAndMemberDTO;
import com.arezip.weconnect.model.vo.FreeBoardVO;

public interface FreeBoardService {
	List<FreeBoardAndMemberDTO> getFreeBoardList();
	int postNewFreeBoard(FreeBoardVO freeBoardVO);
}
