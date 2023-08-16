package com.arezip.weconnect.service;

import java.util.List;

import com.arezip.weconnect.model.dto.FreeBoardDTO;
import com.arezip.weconnect.model.vo.FreeBoardVO;

public interface FreeBoardService {
	List<FreeBoardDTO> getFreeBoardList();
	int insertFreeBoard(FreeBoardDTO freeBoardDTO);
	FreeBoardDTO getFreeBoardDetail(long freeBoardId);
}
