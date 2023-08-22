package com.arezip.weconnect.service.admin;

import java.util.List;
import java.util.Map;

import com.arezip.weconnect.model.dto.FreeBoardDTO;

public interface AdminFreeBoardService {

	List<FreeBoardDTO> retrieveAllFreeBoards();

	List<FreeBoardDTO> searchFreeBoardList(Map<String, String> searchParams);

	int removeFreeBoards(FreeBoardDTO freeBoardDTO);

}
