package com.arezip.weconnect.service;


import java.util.Map;

import org.springframework.stereotype.Service;

import com.arezip.weconnect.mapper.MemberMapper;
import com.arezip.weconnect.model.vo.DepartmentVO;
import com.arezip.weconnect.model.vo.MemberVO;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
@RequiredArgsConstructor
public class MemberServiceImpl implements MemberService {
	private final MemberMapper memberMapper;
	@Override
	public int register(MemberVO memberVO) {
		// TODO Auto-generated method stub
		return memberMapper.register(memberVO);
	}
}
