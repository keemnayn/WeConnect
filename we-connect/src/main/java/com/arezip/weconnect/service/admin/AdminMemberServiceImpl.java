package com.arezip.weconnect.service.admin;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.arezip.weconnect.mapper.admin.AdminMemberMapper;
import com.arezip.weconnect.model.dto.MemberDTO;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AdminMemberServiceImpl implements AdminMemberService {
	private final AdminMemberMapper adminMemberMapper;

//	승인된 회원 목록
	@Override
	public List<MemberDTO> getApprovedMembers() {
		return adminMemberMapper.selectApprovedMembers();
	}

//	승인된 회원 검색
	@Override
	public List<MemberDTO> getApprovedMembersByCriteria(Map<String, String> searchParams) {
		return adminMemberMapper.selectApprovedMembersByCriteria(searchParams);
	}

//	회원 수정
	@Override
	public int updateMemberDetails(MemberDTO memberDTO) {
		return adminMemberMapper.updateMemberDetails(memberDTO);
	}

//	회원 삭제
	@Override
	public int removeMember(MemberDTO memberDTO) {
		return adminMemberMapper.deleteMember(memberDTO);
	}

//	승인 대기 회원 목록
	@Override
	public List<MemberDTO> getPendingMembers() {
		return adminMemberMapper.selectPendingMembers();
	}

//	승인 대기 회원 검색
	@Override
	public List<MemberDTO> getPendingMembersByCriteria(Map<String, String> searchParams) {
		return adminMemberMapper.selectPendingMembersByCriteria(searchParams);
	}
}