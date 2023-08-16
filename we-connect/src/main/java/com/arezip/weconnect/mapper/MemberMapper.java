package com.arezip.weconnect.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.arezip.weconnect.model.dto.DepartmentDTO;
import com.arezip.weconnect.model.dto.MemberDTO;

@Mapper
public interface MemberMapper {
 
	int register(MemberDTO memberDTO);
	List<DepartmentDTO> findByDepartMentNAME();
	MemberDTO login(long email, String password);
}
