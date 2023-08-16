package com.arezip.weconnect;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.arezip.weconnect.mapper.MemberMapper;
import com.arezip.weconnect.model.dto.DepartmentDTO;
import com.arezip.weconnect.model.dto.MemberDTO;

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
		MemberDTO memberDTO = new MemberDTO();
		memberDTO.setMemberName("박준1");
		memberDTO.setMemberEmail("erer121@naver.com");
		memberDTO.setMemberPassword("a");
		memberDTO.setPosition("사원");
		memberDTO.setMemberStatus("승인");
		memberDTO.setManagerYn("Y");
		DepartmentDTO departmentDTO = new DepartmentDTO();
		departmentDTO.setDepartmentId(2);
		memberDTO.setDepartmentVO(departmentDTO);
		memberMapper.register(memberDTO);
		log.info("member{}", memberDTO.toString());
	}
}
