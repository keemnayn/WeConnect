package com.arezip.weconnect.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.arezip.weconnect.mapper.MemberMapper;
import com.arezip.weconnect.model.dto.DepartmentDTO;
import com.arezip.weconnect.model.dto.MemberDTO;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
@RequiredArgsConstructor
public class MemberServiceImpl implements MemberService {
	private final MemberMapper memberMapper;

	@Override
	public int register(MemberDTO memberDTO) {
		// TODO Auto-generated method stub
		return memberMapper.register(memberDTO);
	}

	@Override
	public List<DepartmentDTO> findByDepartmentName() {
		return memberMapper.findByDepartmentName();
	}

	@Override
	public MemberDTO login(String memberEmail, String memberPassword) {
		// TODO Auto-generated method stub
		return memberMapper.login(memberEmail, memberPassword);
	}

	@Override
	public MemberDTO findByEmail(String memberEmail) {
		// TODO Auto-generated method stub
		return null;
	}

}
