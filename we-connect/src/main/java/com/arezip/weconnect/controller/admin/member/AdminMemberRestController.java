package com.arezip.weconnect.controller.admin.member;

import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.View;

import com.arezip.weconnect.model.dto.MemberDTO;
import com.arezip.weconnect.service.admin.AdminMemberService;
import com.cleopatra.protocol.data.DataRequest;
import com.cleopatra.protocol.data.ParameterGroup;
import com.cleopatra.protocol.data.ParameterRow;
import com.cleopatra.spring.JSONDataView;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@RequestMapping("/weconnect/admin/members")
@RequiredArgsConstructor
public class AdminMemberRestController {
	private final AdminMemberService adminMemberService;

//	승인된 회원 목록 조회
	@GetMapping
	public View getApprovedMembers(DataRequest dataRequest) {
		List<MemberDTO> memberList = adminMemberService.getApprovedMembers();
		log.info(memberList.toString());
		dataRequest.setResponse("memberList", memberList);
		return new JSONDataView();
	}

//	승인된 회원 검색
	@GetMapping("search")
	public View getApprovedMembersByCriteria(DataRequest dataRequest) {
		ParameterGroup param = dataRequest.getParameterGroup("searchParam");
		Map<String, String> searchParams = new HashMap<String, String>();
		String searchType = null;
		String searchText = null;
		if (param != null) {
			searchType = param.getValue("searchType");
			searchText = param.getValue("searchText");
		}
		List<MemberDTO> memberList = null;
		// searchText가 빈 문자열이거나 null이면 전체 리스트 반환
		if (searchText == null || searchText.trim().isEmpty()) {
			memberList = adminMemberService.getApprovedMembers();
		} else {
			if (searchType != null && !"".equals(searchType.trim())) {
				searchParams.put("searchType", searchType);
			}
			searchParams.put("searchText", searchText);
			memberList = adminMemberService.getApprovedMembersByCriteria(searchParams);
		}
		dataRequest.setResponse("memberList", memberList);
		return new JSONDataView();
	}

//	회원 수정
	@PutMapping
	public View updateMemberDetails(DataRequest dataRequest) {
		ParameterGroup param = dataRequest.getParameterGroup("updateMemberParam");
		log.info(param.toString());
		long memberId = 0;
		String memberName = null;
		String position = null;
		long departmentId = 0;
		if (param != null) {
			memberId = Long.parseLong(param.getValue("memberId"));
			memberName = param.getValue("memberName");
			position = param.getValue("position");
			departmentId = Long.parseLong(param.getValue("departmentId"));
		}
		MemberDTO memberDTO = new MemberDTO();
		memberDTO.setMemberId(memberId);
		memberDTO.setMemberName(memberName);
		memberDTO.setPosition(position);
		memberDTO.setDepartmentId(departmentId);
		log.info(memberDTO.toString());
		adminMemberService.updateMemberDetails(memberDTO);
		return new JSONDataView();
	}

//	회원 삭제 
	@DeleteMapping
	public View deleteMember(DataRequest dataRequest) {
		ParameterGroup parameterGroup = dataRequest.getParameterGroup("memberList");
		if (parameterGroup != null) {
			Iterator<ParameterRow> iter = parameterGroup.getDeletedRows();
			while (iter.hasNext()) {
				Map<String, String> rowMap = iter.next().toMap();
				MemberDTO memberDTO = mapToMemberDTO(rowMap);
				adminMemberService.removeMember(memberDTO);
			}
		}
		return new JSONDataView();
	}

//	Map을 DTO 타입으로 변경하는 메서드
	private MemberDTO mapToMemberDTO(Map<String, String> rowMap) {
		MemberDTO memberDTO = new MemberDTO();
		memberDTO.setMemberId(Long.parseLong(rowMap.get("memberId"))); // map에서의 키
		return memberDTO;
	}

//	승인 대기 회원 목록
	@GetMapping("pending")
	public View getPendingMembers(DataRequest dataRequest) {
		List<MemberDTO> pendingList = adminMemberService.getPendingMembers();
		log.info(pendingList.toString());
		dataRequest.setResponse("pendingList", pendingList);
		return new JSONDataView();
	}

//	승인 대기 회원 검색
	@GetMapping("search/pending")
	public View getPendingMembersByCriteria(DataRequest dataRequest) {
		ParameterGroup param = dataRequest.getParameterGroup("pendingSearchParam");
		Map<String, String> searchParams = new HashMap<String, String>();
		String searchType = null;
		String searchText = null;
		if (param != null) {
			searchType = param.getValue("searchType");
			searchText = param.getValue("searchText");
		}
		List<MemberDTO> pendingList = null;
		// searchText가 빈 문자열이거나 null이면 전체 리스트 반환
		if (searchText == null || searchText.trim().isEmpty()) {
			pendingList = adminMemberService.getPendingMembers();
		} else {
			if (searchType != null && !"".equals(searchType.trim())) {
				searchParams.put("searchType", searchType);
			}
			searchParams.put("searchText", searchText);
			pendingList = adminMemberService.getPendingMembersByCriteria(searchParams);
		}
		dataRequest.setResponse("pendingList", pendingList);
		return new JSONDataView();
	}
}