package com.arezip.weconnect.test.admin.member;

import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.arezip.weconnect.model.dto.MemberDTO;
import com.arezip.weconnect.service.admin.AdminMemberService;

import lombok.extern.slf4j.Slf4j;

@SpringBootTest
@Slf4j
public class AdminMemberServiceTest {
	@Autowired
	AdminMemberService adminMemberService;

//	승인 회원 목록 조회
	@Test
	void getApprovedMembersTest() {
		List<MemberDTO> list = adminMemberService.getApprovedMembers();
		list.forEach(members -> log.info(members.toString()));
		assertNotNull(list);
	}

//	회원 검색
	@Test
	void getApprovedMembersByCriteriaTest() {
		Map<String, String> searchParams = new HashMap<>();
		searchParams.put("searchType", "all");
		searchParams.put("searchText", "박");
		List<MemberDTO> list = adminMemberService.getApprovedMembersByCriteria(searchParams);
		list.forEach(members -> log.info(members.toString()));
		assertNotNull(list);
	}

//	회원 수정
	@Test
	void updateMemberDetailsTest() {
		MemberDTO memberDTO = new MemberDTO();
		memberDTO.setMemberId(1);
		memberDTO.setMemberName("액슬로즈");
		memberDTO.setPosition("대리");
		memberDTO.setDepartmentId(3);
		int result = adminMemberService.updateMemberDetails(memberDTO);
		assertNotEquals(0, result);
	}

//	회원 삭제
	@Test
	void removeMemberById() {
		MemberDTO memberDTO = new MemberDTO();
		long memberId = 102;
		memberDTO.setMemberId(memberId);
		int result = adminMemberService.removeMember(memberDTO);
		assertNotEquals(0, result);
	}

//	승인 대기 회원 조회
	@Test
	void getPendingMembersTest() {
		List<MemberDTO> list = adminMemberService.getPendingMembers();
		list.forEach(members -> log.info(members.toString()));
		assertNotNull(list);
	}

//	회원 검색
	@Test
	void getPendingMembersByCriteriaTest() {
		Map<String, String> searchParams = new HashMap<>();
		searchParams.put("searchType", "all");
		searchParams.put("searchText", "박");
		List<MemberDTO> list = adminMemberService.getPendingMembersByCriteria(searchParams);
		list.forEach(members -> log.info(members.toString()));
		assertNotNull(list);
	}
}