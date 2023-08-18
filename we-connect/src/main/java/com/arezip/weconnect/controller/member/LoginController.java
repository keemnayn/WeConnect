package com.arezip.weconnect.controller.member;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

import com.arezip.weconnect.model.dto.MemberDTO;
import com.arezip.weconnect.service.MemberService;
import com.cleopatra.protocol.data.DataRequest;
import com.cleopatra.protocol.data.ParameterGroup;
import com.cleopatra.spring.JSONDataView;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Controller
@Slf4j
@RequiredArgsConstructor
public class LoginController {
	private final MemberService memberService;
     
	@RequestMapping("weconnect/login")  
	public View login(DataRequest dataRequest, HttpServletRequest request) {
		ParameterGroup parameterGroup = dataRequest.getParameterGroup("member");
		// parameterGroup이 null인지 확인
		if (parameterGroup == null) {    
			log.error("parameterGroup is null");
			return new JSONDataView();
		}
		
		// 'memberEmail' 및 'memberPassword' 값을 가져와 변수에 저장
		String memberEmail = parameterGroup.getValue("memberEmail");
		String memberPassword = parameterGroup.getValue("memberPassword");
		log.info("이메일 값:{}", memberEmail);
		log.info("비밀번호:{}", memberPassword);
		// MemberService의 login 메서드를 호출하여 로그인 시도
		Object loginResult = memberService.login(memberEmail, memberPassword);
		if (loginResult != null) {
			Map<String, Object> message = new HashMap<String, Object>();
			message.put("url", "member/Member");
			message.put("login", loginResult);
			// 응답 데이터의 메타데이터를 설정
			dataRequest.setMetadata(true, message);
			// 세션 생성 
			HttpSession session = request.getSession();
			session.setAttribute("member", loginResult);
			log.info("Session member attribute: {}", session.getAttribute("member"));
			// dataRequest에 응답 설정
			MemberDTO memberDTO = (MemberDTO) loginResult;
			String memberName = memberDTO.getMemberName();
			dataRequest.setResponse("memberName", memberName);
			log.info("memberName:{}", memberName);
			log.info("로그인 성공:{}", loginResult);
		} else {
			log.info("로그인 실패:{}", loginResult);
		} 
		// 로그인 후 리다이렉트할 URL 및 파라미터를 Map 객체에 저장
		// JSONDataView 객체를 반환하여 클라이언트에 응답
		return new JSONDataView();
	}
}
