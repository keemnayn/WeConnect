package com.arezip.weconnect.controller.member;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

import com.cleopatra.protocol.data.DataRequest;
import com.cleopatra.spring.JSONDataView;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import lombok.extern.slf4j.Slf4j;

@Controller
@RequestMapping("weconnect/logout")
@Slf4j
public class LogoutController {

	@PostMapping
	public View logout(HttpServletRequest request, DataRequest dataRequest) {
		Map<String, Object> message = new HashMap<>();
		HttpSession session = request.getSession(false);
		if (session != null) {
			log.info("logout {}", session.getAttribute("memberId"));
			session.invalidate();
		}
		message.put("url", "login");
		dataRequest.setMetadata(true, message);
		return new JSONDataView();
	}
}