package com.arezip.weconnect.controller.member.freeboard;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

import com.cleopatra.spring.UIView;

@Controller
@RequestMapping("weconnect/boardDetail")
public class FreeBoardDetailController {
	@GetMapping
	//자유 게시판 상세 페이지 들어가기
	public View freeBoardDetail() {
		return new UIView("weconnect/member/FreeBoardDetail.clx");
	}
}
