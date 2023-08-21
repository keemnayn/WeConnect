package com.arezip.weconnect.service.admin;

import java.util.List;
import java.util.Map;

import com.arezip.weconnect.model.dto.MemberDTO;

public interface AdminMemberService {
//	승인된 회원 조회
	List<MemberDTO> getApprovedMembers();

//	승인된 회원 검색
	List<MemberDTO> getApprovedMembersByCriteria(Map<String, String> searchParams);

//	회원 수정
	int updateMemberDetails(MemberDTO memberDTO);

//	회원 삭제
	int removeMember(MemberDTO memberDTO);

//	승인 대기 회원 목록
	List<MemberDTO> getPendingMembers();

//	승인 대기 회원 검색
	List<MemberDTO> getPendingMembersByCriteria(Map<String, String> searchParams);
}