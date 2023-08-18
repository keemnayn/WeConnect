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

	@Override
	public List<MemberDTO> getApprovedMembers() {
		return adminMemberMapper.selectApprovedMembers();
	}

	@Override
	public List<MemberDTO> getApprovedMembersByCriteria(Map<String, String> searchParams) {
		return adminMemberMapper.selectApprovedMembersByCriteria(searchParams);
	}

	@Override
	public int updateMemberDetails(MemberDTO memberDTO) {
		return adminMemberMapper.updateMemberDetails(memberDTO);
	}
}