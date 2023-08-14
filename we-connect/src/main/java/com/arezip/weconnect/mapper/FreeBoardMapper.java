package com.arezip.weconnect.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.arezip.weconnect.model.vo.FreeBoardVO;

@Mapper
public interface FreeBoardMapper {
	List<FreeBoardVO> getFreeBoardList();
	int insertFreeBoard (FreeBoardVO freeBoardVO);
	
}
