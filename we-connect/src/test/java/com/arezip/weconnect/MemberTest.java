package com.arezip.weconnect;


import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.arezip.weconnect.mapper.MemberMapper;
import com.arezip.weconnect.model.vo.DepartmentVO;
import com.arezip.weconnect.model.vo.MemberVO;

import lombok.extern.slf4j.Slf4j;


@SpringBootTest
@Slf4j
public class MemberTest {
	@Autowired
	MemberMapper memberMapper;
		
	
	@Test 
	void testDI() {
	Assertions.assertNotNull(memberMapper);
	}
	@Test
	void register() {
        MemberVO memberVO = new MemberVO();
        memberVO.setMemberName("박애준");
        memberVO.setMemberEmail("hi@naver.com");
        memberVO.setMemberPassword("a");
        memberVO.setPosition("사원");
        memberVO.setMemberStatus("승인");
        memberVO.setManagerYn("Y");
        DepartmentVO departmentVO = new DepartmentVO();
        departmentVO.setDepartmentId(2);
        memberVO.setDepartmentVO(departmentVO);
		memberMapper.register(memberVO);
		log.info("member{}", memberVO.toString());
	}
}
