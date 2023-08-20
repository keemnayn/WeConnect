package com.arezip.weconnect.service;

import java.util.List;

import com.arezip.weconnect.model.dto.FreeBoardCommentDTO;
import com.arezip.weconnect.model.dto.FreeBoardDTO;

public interface FreeBoardService {
	List<FreeBoardDTO> getFreeBoardList();
	int insertFreeBoard(FreeBoardDTO freeBoardDTO);
	FreeBoardDTO getFreeBoardDetail(long freeBoardId);
	List<FreeBoardCommentDTO> getFreeBoardDetailComment(long freeBoardId);
}
