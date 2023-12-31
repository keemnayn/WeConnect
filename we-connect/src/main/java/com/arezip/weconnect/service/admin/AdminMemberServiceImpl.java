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

//	회원 가입 승인
	@Override
	public int approveMember(MemberDTO memberDTO) {
		return adminMemberMapper.approveMember(memberDTO);
	}

//	회원 가입 거절
	@Override
	public int rejectMember(MemberDTO memberDTO) {
		return adminMemberMapper.rejectMember(memberDTO);
	}

	@Override
	public int getLeaveCountByMemberId(long memberId) {
		return adminMemberMapper.getLeaveCountByMemberId(memberId);
	}

	@Override
	public String getMemberNameById(long memberId) {
		return adminMemberMapper.findMemberNameById(memberId);
	}
}