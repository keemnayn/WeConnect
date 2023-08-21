package com.arezip.weconnect.test.register;

import static org.junit.jupiter.api.Assertions.assertNotEquals;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.arezip.weconnect.model.dto.MemberDTO;
import com.arezip.weconnect.service.MemberService;

import lombok.extern.slf4j.Slf4j;

@SpringBootTest
@Slf4j
public class RegisterServiceTest {
	@Autowired
	MemberService memberService;

//	박해준 회원가입 수정
	@Test
	void registerMemberTest() {
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		String memberEmail = "weconnect1234@weconnect.com";
		String memberName = "김충환";
		String memberPassword = "a";
		String encodedPassword = encoder.encode(memberPassword);
		long departmentId = 1;
		String position = "대리";
		MemberDTO memberDTO = new MemberDTO();
		memberDTO.setMemberEmail(memberEmail);
		memberDTO.setMemberName(memberName);
		memberDTO.setMemberPassword(encodedPassword);
		memberDTO.setDepartmentId(departmentId);
		memberDTO.setPosition(position);
		int result = memberService.registerMember(memberDTO);
		assertNotEquals(0, result);
	}
}
