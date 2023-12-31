package com.arezip.weconnect.controller.member;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
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

	@GetMapping("check")
	public View checkEmailDuplication(DataRequest dataRequest) {
		ParameterGroup parameterGroup = dataRequest.getParameterGroup("registerMemberParam");
		String memberEmail = parameterGroup.getValue("memberEmail");
		log.info("memberEmail {}", memberEmail);
		boolean isNotDuplicated = memberService.isEmailDuplicated(memberEmail);
		Map<String, Object> message = new HashMap<>();
		if (isNotDuplicated) {
			message.put("message", "사용 가능한 이메일 입니다");
		} else {
			message.put("message", "중복된 이메일 입니다");
		}
		dataRequest.setMetadata(isNotDuplicated, message);
		return new JSONDataView();
	}

	@GetMapping("Name")
	public View memberName(DataRequest dataRequest, HttpServletRequest request) {
		HttpSession session = request.getSession();
		Long memberId = (Long) session.getAttribute("memberId");
		System.out.println("세션아이디:" + memberId);
		List<MemberDTO> memberList = memberService.findMemberName(memberId);
		dataRequest.setResponse("memberList", memberList);
		log.info("멤버: {}", memberList);
		return new JSONDataView();
	}

	@GetMapping("id")
	public View memberId(DataRequest dataRequest, HttpServletRequest request) {
		HttpSession session = request.getSession();
		Long memberId = (Long) session.getAttribute("memberId");
		Map<String, Object> memberMap = new HashMap<>();
		memberMap.put("memberId", memberId);
		dataRequest.setResponse("memberId", memberMap);
		return new JSONDataView();
	}
}