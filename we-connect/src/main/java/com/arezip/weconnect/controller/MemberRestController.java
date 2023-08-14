package com.arezip.weconnect.controller;

import java.util.Iterator;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.View;

import com.arezip.weconnect.model.vo.MemberVO;
import com.arezip.weconnect.service.MemberService;
import com.cleopatra.protocol.data.DataRequest;
import com.cleopatra.protocol.data.ParameterGroup;
import com.cleopatra.protocol.data.ParameterRow;
import com.cleopatra.spring.JSONDataView;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@RequiredArgsConstructor
@RequestMapping("/weconnect")
public class MemberRestController {
	private final MemberService memberService;
	
	@PostMapping("register.do")
	public View register (DataRequest dataRequest) {
		ParameterGroup parameterGroup = dataRequest.getParameterGroup("member");
		log.info("member Data{}",parameterGroup);
		Iterator<ParameterRow> iterator;
		iterator = parameterGroup.getInsertedRows();
		while(iterator.hasNext()) {
			MemberVO memberVO = memberService.convertMapToMemberVO(iterator.next().toMap());
			memberService.register(memberVO);
		}
		return new JSONDataView();
	}
}
