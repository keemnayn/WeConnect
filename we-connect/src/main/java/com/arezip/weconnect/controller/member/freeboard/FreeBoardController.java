package com.arezip.weconnect.controller.member.freeboard;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

import com.cleopatra.spring.UIView;

@Controller
@RequestMapping("/weconnect/member/boardWriteForm")
public class FreeBoardController {
	// 새글창
	@GetMapping
	public View boardWriteFrom() {
		return new UIView("weconnect/user/BoardWriteForm.clx");
	}
}
