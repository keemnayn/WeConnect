package com.arezip.weconnect.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.arezip.weconnect.model.vo.FreeBoardAndMemberVO;
import com.arezip.weconnect.model.vo.FreeBoardVO;

@Mapper
public interface FreeBoardMapper {
	List<FreeBoardAndMemberVO> getFreeBoardList();
	int insertFreeBoard (FreeBoardVO freeBoardVO);
	
}
