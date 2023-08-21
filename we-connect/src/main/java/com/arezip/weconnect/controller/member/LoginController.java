package com.arezip.weconnect.controller.member;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

import com.arezip.weconnect.service.MemberService;
import com.cleopatra.protocol.data.DataRequest;
import com.cleopatra.protocol.data.ParameterGroup;
import com.cleopatra.spring.JSONDataView;
import com.cleopatra.spring.UIView;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Controller
@Slf4j
@RequiredArgsConstructor
@RequestMapping("weconnect/login")
public class LoginController {
	private final MemberService memberService;

// 로그인 페이지 들어가기
	@GetMapping
	public View login() {
		return new UIView("weconnect/login/Login.clx");
	}

	// 상수로 유효하지 않은 멤버 ID와 승인되지 않은 멤버 ID를 나타내는 값을 정의
	private static final long INVALID_LOGIN = 0;
	private static final long NON_APPROVED_MEMBER = -1;

	@PostMapping
	public View login(DataRequest dataRequest, HttpServletRequest request) {
		ParameterGroup parameterGroup = dataRequest.getParameterGroup("loginParam");

		if (parameterGroup == null) {
			return createErrorResponse(dataRequest, "Invalid request parameters");
		}

		String memberEmail = parameterGroup.getValue("memberEmail");
		String memberPassword = parameterGroup.getValue("memberPassword");
		Long memberId = memberService.authenticate(memberEmail, memberPassword);

		if (memberId == NON_APPROVED_MEMBER) {
			log.warn("로그인 시도 실패 - 승인 대기 중인 회원: memberEmail={}", memberEmail);
			return createErrorResponse(dataRequest, "승인 대기중인 회원입니다");
		}

		if (memberId == INVALID_LOGIN) {
			log.warn("로그인 시도 실패 - 아이디 또는 비밀번호 오류: memberEmail={}", memberEmail);
			return createErrorResponse(dataRequest, "아이디 또는 비밀번호 오류입니다");
		}

		Map<String, Object> message = new HashMap<>();
		message.put("url", "/");
		message.put("login", true);
		dataRequest.setMetadata(true, message);

		HttpSession session = request.getSession();
		session.setAttribute("memberId", memberId);

		log.info("로그인 성공: memberId={}", memberId);

		return new JSONDataView();
	}

	// 에러 부분 재사용 코드
	private View createErrorResponse(DataRequest dataRequest, String errorMsg) {
		Map<String, Object> errorMap = new HashMap<>();
		errorMap.put("error", errorMsg);
		dataRequest.setMetadata(false, errorMap);
		return new JSONDataView();
	}
}
