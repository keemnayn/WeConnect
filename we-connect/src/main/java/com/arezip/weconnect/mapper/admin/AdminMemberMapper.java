package com.arezip.weconnect.mapper.admin;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.arezip.weconnect.model.dto.MemberDTO;

@Mapper
public interface AdminMemberMapper {
//	승인된 회원 조회
	List<MemberDTO> selectApprovedMembers();

//	승인된 회원 검색
	List<MemberDTO> selectApprovedMembersByCriteria(Map<String, String> searchParams);

//	회원 수정
	int updateMemberDetails(MemberDTO memberDTO);

//	회원 삭제
	int deleteMember(MemberDTO memberDTO);

//	승인 대기 회원 조회
	List<MemberDTO> selectPendingMembers();

//	승인 대기 회원 검색
	List<MemberDTO> selectPendingMembersByCriteria(Map<String, String> searchParams);
}