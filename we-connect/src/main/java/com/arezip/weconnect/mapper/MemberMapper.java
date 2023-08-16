package com.arezip.weconnect.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.arezip.weconnect.model.dto.MemberDTO;

@Mapper
public interface MemberMapper {

	int register(MemberDTO memberDTO);

}
