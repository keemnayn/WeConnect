package com.arezip.weconnect.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

import com.cleopatra.spring.UIView;

@Controller
@RequestMapping("/weconnect")
public class FreeBoardController {
	 //새글창
	 @GetMapping("boardWriteFrom.do")
	 public View boardWriteFrom() {
		 return new UIView("weconnect/user/BoardWriteForm.clx");
	 }
}
