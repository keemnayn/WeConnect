package com.arezip.weconnect.mapper.admin;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.arezip.weconnect.model.dto.FreeBoardDTO;

@Mapper
public interface AdminFreeBoardMapper {
	List<FreeBoardDTO> getAllFreeBoards();

	List<FreeBoardDTO> searchFreeBoardList(Map<String, String> searchParams);

	int deleteFreeBoards(FreeBoardDTO freeBoardDTO);
}
