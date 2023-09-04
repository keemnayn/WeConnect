package com.arezip.weconnect.service;

import java.util.List;

import com.arezip.weconnect.model.dto.DepartmentDTO;
import com.arezip.weconnect.model.dto.MemberDTO;

public interface MemberService {
	List<DepartmentDTO> findByDepartmentName();

	boolean isEmailDuplicated(String memberEmail);

//	회원가입 수정
	int registerMember(MemberDTO memberDTO);

//	로그인
	long authenticate(String memberEmail, String memberPassword);

//	관리자 여부
	boolean isAdmin(long memberId);

//  메인 화면 세션
	List<MemberDTO> findMemberName(long memberId);
}