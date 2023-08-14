package com.arezip.weconnect.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.arezip.weconnect.model.vo.MemberVO;

@Mapper
public interface MemberMapper {

	int register(MemberVO memberVO);
  
}
