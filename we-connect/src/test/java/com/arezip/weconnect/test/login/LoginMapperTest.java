package com.arezip.weconnect.test.login;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.arezip.weconnect.mapper.MemberMapper;
import com.arezip.weconnect.model.dto.MemberDTO;

import lombok.extern.slf4j.Slf4j;

@SpringBootTest
@Slf4j
public class LoginMapperTest {
	@Autowired
	MemberMapper memberMapper;
	@Autowired
	PasswordEncoder passwordEncoder;

//	박해준 로그인 수정
	@Test
	void findBymemberEmailTest() {
		String memberEmail = "cyon8254@gmail.com";
		MemberDTO memberDTO = memberMapper.findByMemberEmail(memberEmail);
		log.info("memberDTO = " + memberDTO.toString());
		log.info("memberId = " + memberDTO.getMemberId());
		assertNotNull(memberDTO);
	}
}