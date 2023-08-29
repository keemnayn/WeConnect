package com.arezip.weconnect.controller.admin;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.View;

import com.arezip.weconnect.service.admin.AdminMemberService;
import com.cleopatra.protocol.data.DataRequest;
import com.cleopatra.spring.JSONDataView;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@RequestMapping("/weconnect/admin")
@RequiredArgsConstructor
public class AdminRestController {
	private final AdminMemberService adminMemberService;

	@GetMapping("name")
	public View getMemberName(DataRequest dataRequest, HttpServletRequest request) {
		HttpSession session = request.getSession();
		long memberId = (long) session.getAttribute("memberId");
		String memberName = adminMemberService.getMemberNameById(memberId);
		log.info("memberName {}", memberName);
		Map<String, String> memberNameMap = new HashMap<>();
		memberNameMap.put("memberName", memberName);
		dataRequest.setResponse("memberName", memberNameMap);
		return new JSONDataView();
	}
}