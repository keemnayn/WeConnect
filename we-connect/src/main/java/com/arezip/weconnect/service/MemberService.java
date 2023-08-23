package com.arezip.weconnect.service;

import java.util.List;

import com.arezip.weconnect.model.dto.DepartmentDTO;
import com.arezip.weconnect.model.dto.MemberDTO;
import com.arezip.weconnect.model.dto.ProfileImageDTO;

public interface MemberService {
//	int register(MemberDTO memberDTO);

	List<DepartmentDTO> findByDepartmentName();

//	MemberDTO login(String memberEmail, String memberPassword);

	MemberDTO findByEmail(String memberEmail);

//	회원가입 수정
	int registerMember(MemberDTO memberDTO);

//	로그인
	long authenticate(String memberEmail, String memberPassword);

//	관리자 여부
	boolean isAdmin(long memberId);
}
