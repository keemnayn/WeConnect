package com.arezip.weconnect.service;

import java.util.List;

import com.arezip.weconnect.model.dto.DepartmentDTO;
import com.arezip.weconnect.model.dto.MemberDTO;

public interface MemberService {
	int register(MemberDTO memberDTO);
	List<DepartmentDTO> findByDepartMentNAME();
	MemberDTO login(long email, String password);
}
