package com.arezip.weconnect.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.arezip.weconnect.mapper.MemberMapper;
import com.arezip.weconnect.model.dto.DepartmentDTO;
import com.arezip.weconnect.model.dto.MemberDTO;
import com.arezip.weconnect.model.dto.ProfileImageDTO;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
@RequiredArgsConstructor
public class MemberServiceImpl implements MemberService {
	private final MemberMapper memberMapper;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Override
	public List<DepartmentDTO> findByDepartmentName() {
		return memberMapper.findByDepartmentName();
	}

	@Override
	public MemberDTO findByEmail(String memberEmail) {
		// TODO Auto-generated method stub
		return null;
	}

//	회원가입 수정
	@Override
	public int registerMember(MemberDTO memberDTO) {
		String encodedPassword = passwordEncoder.encode(memberDTO.getMemberPassword());
		memberDTO.setMemberPassword(encodedPassword);
		return memberMapper.insertMember(memberDTO);
	}

	// 상수로 유효하지 않은 멤버 ID를 나타내는 값을 정의
	private static final long INVALID_MEMBER_ID = 0;
	private static final long NON_APPROVED_MEMBER = -1;

//	로그인
	@Override
	public long authenticate(String memberEmail, String memberPassword) {
		MemberDTO memberDTO = memberMapper.findByMemberEmail(memberEmail);

		// 멤버 정보가 없으면 INVALID_MEMBER_ID를 반환합니다.
		if (memberDTO == null) {
			return INVALID_MEMBER_ID;
		}

		// 멤버의 상태가 '승인'이 아니면 -1을 반환합니다.
		if (!"승인".equals(memberDTO.getMemberStatus())) {
			return NON_APPROVED_MEMBER;
		}

		// 입력된 비밀번호와 저장된 비밀번호가 일치하면 멤버 ID를 반환합니다.
		if (passwordEncoder.matches(memberPassword, memberDTO.getMemberPassword())) {
			return memberDTO.getMemberId();
		}

		// 비밀번호가 일치하지 않으면 INVALID_MEMBER_ID를 반환합니다.
		return INVALID_MEMBER_ID;
	}

	// 관리자 여부
	@Override
	public boolean isAdmin(long memberId) {
		char role = memberMapper.findRoleByMemberId(memberId);
		return 'Y' == role;
	}
}