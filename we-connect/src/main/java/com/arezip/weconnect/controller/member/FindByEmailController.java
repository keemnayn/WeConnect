package com.arezip.weconnect.controller.member;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

import com.arezip.weconnect.service.MemberService;
import com.cleopatra.protocol.data.DataRequest;
import com.cleopatra.protocol.data.ParameterGroup;
import com.cleopatra.spring.JSONDataView;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Controller
@Slf4j
@RequiredArgsConstructor
public class FindByEmailController {
	private final MemberService memberService;
	
	@RequestMapping("weconnect/email")
	@GetMapping
	//이메일 값 중복 확인 메서드 
	public View findByEmailController(DataRequest dataRequest) {
		ParameterGroup parameterGroup = dataRequest.getParameterGroup("member");
		String memberEmail = parameterGroup.getValue("memberEmail");
		memberService.findByEmail(memberEmail);
		log.info("email:{}",memberService.findByEmail(memberEmail));
		Map<String, Object>  save = new HashMap<String, Object>();
		save.put("email",memberService.findByEmail(memberEmail));
		dataRequest.setMetadata(true, save);
		return  new JSONDataView();
	}
}
