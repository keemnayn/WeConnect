package com.arezip.weconnect.test.admin.member;

import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.arezip.weconnect.mapper.admin.AdminMemberMapper;
import com.arezip.weconnect.model.dto.MemberDTO;

import lombok.extern.slf4j.Slf4j;

@SpringBootTest
@Slf4j
public class AdminMemberMapperTest {
	@Autowired
	AdminMemberMapper adminMemberMapper;

//	승인 회원 목록 조회 
	@Test
	void selectApprovedMembersTest() {
		List<MemberDTO> list = adminMemberMapper.selectApprovedMembers();
		list.forEach(members -> log.info(members.toString()));
		assertNotNull(list);
	}

//	회원 검색
	@Test
	void selectApprovedMembersByCriteriaTest() {
		Map<String, String> searchParams = new HashMap<>();
		searchParams.put("searchType", "all");
		searchParams.put("searchText", "박");
		List<MemberDTO> list = adminMemberMapper.selectApprovedMembersByCriteria(searchParams);
		list.forEach(members -> log.info(members.toString()));
		assertNotNull(list);
	}

//	회원 수정
	@Test
	void updateMemberDetailsTest() {
		MemberDTO memberDTO = new MemberDTO();
		memberDTO.setMemberId(1);
		memberDTO.setMemberName("박해준");
		memberDTO.setPosition("주임");
		memberDTO.setDepartmentId(1);
		int result = adminMemberMapper.updateMemberDetails(memberDTO);
		assertNotEquals(0, result);
	}

//	회원 삭제
	@Test
	void deleteMemberByIdTest() {
		MemberDTO memberDTO = new MemberDTO();
		long memberId = 101;
		memberDTO.setMemberId(memberId);
		int result = adminMemberMapper.deleteMember(memberDTO);
		assertNotEquals(0, result);
	}

//	승인 대기 회원 리스트
	@Test
	void selectPendingMembersTest() {
		List<MemberDTO> list = adminMemberMapper.selectPendingMembers();
		list.forEach(members -> log.info(members.toString()));
		assertNotNull(list);
	}

//	승인 대기 회원 검색
	@Test
	void selectPendingMembersByCriteriaTest() {
		Map<String, String> searchParams = new HashMap<>();
		searchParams.put("searchType", "all");
		searchParams.put("searchText", "박");
		List<MemberDTO> list = adminMemberMapper.selectPendingMembersByCriteria(searchParams);
		list.forEach(members -> log.info(members.toString()));
		assertNotNull(list);
	}
}