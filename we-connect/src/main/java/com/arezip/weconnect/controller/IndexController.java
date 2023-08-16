package com.arezip.weconnect.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

import com.cleopatra.spring.UIView;

@Controller
public class IndexController {
	@RequestMapping
	public View index() {
		return new UIView("weconnect/user/User.clx");
	}
}