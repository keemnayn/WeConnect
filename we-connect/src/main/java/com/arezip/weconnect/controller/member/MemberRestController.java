package com.arezip.weconnect.controller.member;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.View;

import com.arezip.weconnect.model.dto.DepartmentDTO;
import com.arezip.weconnect.model.dto.MemberDTO;
import com.arezip.weconnect.service.MemberService;
import com.cleopatra.protocol.data.DataRequest;
import com.cleopatra.protocol.data.ParameterGroup;
import com.cleopatra.spring.JSONDataView;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@RequiredArgsConstructor
@RequestMapping("/weconnect/member")
public class MemberRestController {
	private final MemberService memberService;

//	회원가입
	@PostMapping
	public View register(DataRequest dataRequest) {
		ParameterGroup parameterGroup = dataRequest.getParameterGroup("registerMemberParam");
		String memberName = parameterGroup.getValue("memberName");
		String memberEmail = parameterGroup.getValue("memberEmail");
		String memberPassword = parameterGroup.getValue("memberPassword");
		String position = parameterGroup.getValue("position");
		long departmentId = Long.parseLong(parameterGroup.getValue("departmentId"));
		MemberDTO memberDTO = new MemberDTO();
		memberDTO.setMemberName(memberName);
		memberDTO.setMemberEmail(memberEmail);
		memberDTO.setMemberPassword(memberPassword);
		memberDTO.setPosition(position);
		memberDTO.setDepartmentId(departmentId);
		memberService.registerMember(memberDTO);
		return new JSONDataView();
	}

	// 콤보박스 부서에 DB 리스트 뿌림
	@GetMapping
	public View ListDepartment(DataRequest dataRequest) {
		List<DepartmentDTO> departmentList = memberService.findByDepartmentName();
		dataRequest.setResponse("departmentList", departmentList);
		log.info("부서리스트{}:", departmentList);
		return new JSONDataView();
	}
}
