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
	// 회원가입
	@PostMapping
	public View register(DataRequest dataRequest) {
	    ParameterGroup parameterGroup = dataRequest.getParameterGroup("member");
	    log.info("멤버리스트: {}", parameterGroup);

	    // 멤버 정보 추출
	    String memberName = parameterGroup.getValue("memberName");
	    String memberEmail = parameterGroup.getValue("memberEmail");
	    String memberPassword = parameterGroup.getValue("memberPassword");
	    String position = parameterGroup.getValue("position");

	    // 부서 정보 추출
	    ParameterGroup departmentGroup = dataRequest.getParameterGroup("department1");
	    long departmentID = Long.parseLong(departmentGroup.getValue("departmentId"));

	    // DepartmentDTO 객체 생성 및 값 설정
	    DepartmentDTO departmentDTO = new DepartmentDTO();
	    departmentDTO.setDepartmentId(departmentID);  

	    // MemberDTO 객체 생성 및 값 설정
	    MemberDTO memberDTO = new MemberDTO();
	    memberDTO.setMemberName(memberName);
	    memberDTO.setMemberEmail(memberEmail);
	    memberDTO.setMemberPassword(memberPassword);
	    memberDTO.setPosition(position);
	    memberDTO.setDepartmentVO(departmentDTO); // DepartmentDTO 객체를 MemberDTO에 설정

	    // 회원 등록 서비스 호출
	    memberService.register(memberDTO);

	    // 로깅
	    log.info("직급: {}", position);
	    log.info("부서: {}", departmentID);
	    log.info("이메일 값: {}", memberEmail);
	    log.info("이름 값: {}", memberName);
	    log.info("비밀번호: {}", memberPassword);
	    log.info("회원가입완료:{}",memberDTO);
	    return new JSONDataView();
	}
	//콤보박스 부서에 DB 리스트 뿌림 
	@GetMapping
	public View ListDepartment(DataRequest dataRequest) {
		List<DepartmentDTO> departmentList = memberService.findByDepartMentNAME();
		dataRequest.setResponse("departmentList", departmentList);
		log.info("부서리스트{}:", memberService.findByDepartMentNAME());
		return new JSONDataView();
	}
}
