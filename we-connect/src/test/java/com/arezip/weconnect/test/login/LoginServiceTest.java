package com.arezip.weconnect.test.login;

import static org.junit.jupiter.api.Assertions.assertNotEquals;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.arezip.weconnect.service.MemberService;

import lombok.extern.slf4j.Slf4j;

@SpringBootTest
@Slf4j
public class LoginServiceTest {
	@Autowired
	MemberService memberService;
	@Autowired
	PasswordEncoder passwordEncoder;

//	박해준 로그인 수정
	@Test
	void authenticateTest() {
		String memberEmail = "cyon8254@gmail.com";
		String memberPassword = "phj@971204";
		long memberId = memberService.authenticate(memberEmail, memberPassword);
		log.info("memberId = " + memberId);
		assertNotEquals(0, memberId);
	}
}
