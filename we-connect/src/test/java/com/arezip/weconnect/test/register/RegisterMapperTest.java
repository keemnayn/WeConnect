package com.arezip.weconnect.test.register;

import static org.junit.jupiter.api.Assertions.assertNotEquals;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.arezip.weconnect.mapper.MemberMapper;
import com.arezip.weconnect.model.dto.MemberDTO;

import lombok.extern.slf4j.Slf4j;

@SpringBootTest
@Slf4j
public class RegisterMapperTest {
	@Autowired
	MemberMapper memberMapper;

//	박해준 회원가입 수정
	@Test
	void insertMemberTest() {
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		String memberEmail = "weconnect@weconnect.com";
		String memberName = "김경구";
		String memberPassword = "a";
		String encodedPassword = encoder.encode(memberPassword);
		long departmentId = 1;
		String position = "사원";
		MemberDTO memberDTO = new MemberDTO();
		memberDTO.setMemberEmail(memberEmail);
		memberDTO.setMemberName(memberName);
		memberDTO.setMemberPassword(encodedPassword);
		memberDTO.setDepartmentId(departmentId);
		memberDTO.setPosition(position);
		int result = memberMapper.insertMember(memberDTO);
		assertNotEquals(0, result);
	}
}
