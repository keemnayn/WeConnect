package com.arezip.weconnect.service.admin;

import java.util.List;

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
}