package com.arezip.weconnect.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.View;

import com.arezip.weconnect.service.MemberService;
import com.cleopatra.protocol.data.DataRequest;
import com.cleopatra.spring.JSONDataView;
import com.cleopatra.spring.UIView;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Controller
@RequiredArgsConstructor
@Slf4j
public class IndexController {
	private final MemberService memberService;

	@RequestMapping
	public View index(HttpServletRequest request) {
		HttpSession session = request.getSession(false);
		if (session == null || session.getAttribute("memberId") == null) {
			return new UIView("weconnect/login/Login.clx");
		}
		return new UIView("weconnect/member/Member.clx");
	}

	@GetMapping("weconnect/admin/check")
	@ResponseBody
	public View checkIfAdmin(DataRequest dataRequest, HttpServletRequest request) {
		Map<String, Object> message = new HashMap<>();
		HttpSession session = request.getSession(false);

		if (session == null) {
			message.put("error", "로그인 상태가 아닙니다");
			message.put("url", "login");
			dataRequest.setMetadata(false, message);
		} else {
			// 세션에서 memberId 가져오기
			Long memberId = (Long) session.getAttribute("memberId");
			log.debug("memberId {}", memberId);

			if (memberId != null) {
				boolean isAdmin = memberService.isAdmin(memberId);

				if (isAdmin) {
					message.put("url", "admin/dashboard");
					dataRequest.setMetadata(true, message);
				} else {
					log.warn("Unauthorized access attempt by memberId: {}", memberId);
					message.put("error", "권한이 없습니다.");
					dataRequest.setMetadata(false, message);
				}
			}
		}

		return new JSONDataView();
	}

	@RequestMapping("weconnect/admin/dashboard")
	public View admin(HttpServletRequest request) {
		HttpSession session = request.getSession(false);
		if (session == null || session.getAttribute("memberId") == null) {
			return new UIView("weconnect/login/Login.clx");
		}
		return new UIView("weconnect/admin/Admin.clx");
	}

	@RequestMapping("weconnect/register")
	public View register(HttpServletRequest request) {
		return new UIView("weconnect/register/Register.clx");
	}
}