package com.arezip.weconnect.service;

import java.util.Map;import java.util.concurrent.atomic.LongAccumulator;

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
	public MemberVO convertMapToMemberVO(Map<String,String>map) {
		MemberVO member = new MemberVO();
		member.setMemberId(Long.parseLong(map.get("memberId").toString()));
		member.setMemberName(map.get("memberName").toString());
		member.setMemberEmail(map.get("memberEmail").toString());
		member.setMemberPassword(map.get("memberPassword").toString());
		member.setPosition(map.get("position").toString());
		member.setMemberStatus(map.get("memberStatus").toString());
		member.setManagerYn(map.get("managerYn").toString());
		member.setLeaveCount(Long.parseLong(map.get("leaveCount").toString()));
		DepartmentVO departmentVO = new DepartmentVO();
		departmentVO.setDepartmentId(Long.parseLong(map.get("departmentId").toString()));
		member.setDepartmentVO(departmentVO);
		return member;
	}
	@Override
	public int register(MemberVO memberVO) {
		// TODO Auto-generated method stub
		return memberMapper.register(memberVO);
	}
}
