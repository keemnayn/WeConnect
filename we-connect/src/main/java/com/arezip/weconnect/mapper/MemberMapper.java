package com.arezip.weconnect.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.arezip.weconnect.model.dto.DepartmentDTO;
import com.arezip.weconnect.model.dto.MemberDTO;

@Mapper
public interface MemberMapper {
//	부서명
	List<DepartmentDTO> findByDepartmentName();

//	이메일 중복확인
	int checkEmailExists(String memberEmail);

//	회원가입 수정
	int insertMember(MemberDTO memberDTO);

//	로그인 수정
	MemberDTO findByMemberEmail(String userEmail);

//	관리자 여부
	char findRoleByMemberId(long memberId);
	List<MemberDTO> findMemberName(long memberId);
}
