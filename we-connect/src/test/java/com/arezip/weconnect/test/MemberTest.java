package com.arezip.weconnect.test;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.List;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.arezip.weconnect.mapper.MemberMapper;
import com.arezip.weconnect.model.dto.DepartmentDTO;
import com.arezip.weconnect.model.dto.MemberDTO;
import com.arezip.weconnect.service.MemberService;

import lombok.extern.slf4j.Slf4j;

@SpringBootTest
@Slf4j
public class MemberTest {
	@Autowired
	MemberService memberService;

	@Test
	void testDI() {
		Assertions.assertNotNull(memberService);
	}

	@Test
	void register() {
		MemberDTO memberDTO = new MemberDTO();
		memberDTO.setMemberName("박131");
		memberDTO.setMemberEmail("ereweqr12121@naver.com");
		memberDTO.setMemberPassword("a");
		memberDTO.setPosition("사원");
		DepartmentDTO departmentDTO = new DepartmentDTO();
		departmentDTO.setDepartmentId(2);
		memberDTO.setDepartmentVO(departmentDTO);
		memberService.register(memberDTO);
		log.info("회원가입성공:{}", memberDTO.toString());
	}
    @Test
    public void testFindByDepartmentName() {
        List<DepartmentDTO> departmentList = memberService.findByDepartMentNAME();
        log.info("부서이름{}:",departmentList);
        assertNotNull(departmentList); // 검증: 조회 결과는 null이 아니어야 함 
    }
    
    @Test
    public void login() {
        long email = Long.parseLong("wqeqwere1");
        String password = "12";
        memberService.login(email, password);
        log.info("로그인 성공 {}", memberService.login(email, password));
    }
}