package com.arezip.weconnect.controller.member;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.View;

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

	// 회원가입
	@PostMapping
	public View register(DataRequest dataRequest) {
		ParameterGroup parameterGroup = dataRequest.getParameterGroup("member");
		log.info("멤버리스트:{}", parameterGroup);
		String memberID = parameterGroup.getValue("MEMBER_ID");
		String memberName = parameterGroup.getValue("MEMBER_NAME");
		String memberEmail = parameterGroup.getValue("MEMBER_EMAIL");
		String memberPassword = parameterGroup.getValue("MEMBER_PASSWORD");
		ParameterGroup departmentGroup = dataRequest.getParameterGroup("department");
		MemberDTO memberDTO = new MemberDTO();
		memberService.register(memberDTO);
		log.info("departmentDB: {}", departmentGroup);
		log.info("이메일 값:{}", memberEmail);
		log.info("이름 값:{}", memberName);
		log.info("비밀번호:{}", memberPassword);
		return new JSONDataView();
	}
}
