package com.arezip.weconnect.controller.admin.member;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.View;

import com.arezip.weconnect.model.dto.MemberDTO;
import com.arezip.weconnect.service.admin.AdminMemberService;
import com.cleopatra.protocol.data.DataRequest;
import com.cleopatra.spring.JSONDataView;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@RequestMapping("/weconnect/admin/members")
@RequiredArgsConstructor
public class AdminMemberRestController {
	private final AdminMemberService adminMemberService;

	@GetMapping
	public View getApprovedMembers(DataRequest dataRequest) {
		List<MemberDTO> memberList = adminMemberService.getApprovedMembers();
		dataRequest.setResponse("memberList", memberList);
		return new JSONDataView();
	}
}