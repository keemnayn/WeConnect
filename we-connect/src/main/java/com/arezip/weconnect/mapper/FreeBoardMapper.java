package com.arezip.weconnect.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.arezip.weconnect.model.dto.FreeBoardDTO;
import com.arezip.weconnect.model.vo.FreeBoardVO;

@Mapper
public interface FreeBoardMapper {
	List<FreeBoardDTO> getFreeBoardList();
	int insertFreeBoard(FreeBoardDTO freeBoardDTO);
	FreeBoardDTO getFreeBoardDetail(long freeBoardId);
}
 