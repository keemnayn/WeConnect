package com.arezip.weconnect.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.arezip.weconnect.model.dto.DepartmentDTO;
import com.arezip.weconnect.model.dto.MemberDTO;

@Mapper
public interface MemberMapper {

//	int register(MemberDTO memberDTO);

	List<DepartmentDTO> findByDepartmentName();

//	MemberDTO login(String memberEmail, String memberPassword);

	MemberDTO findByEmail(String memberEmail);

//	회원가입 수정
	int insertMember(MemberDTO memberDTO);

//	로그인 수정
	MemberDTO findByMemberEmail(String userEmail);

//	관리자 여부
	char findRoleByMemberId(long memberId);
}
