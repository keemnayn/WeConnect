package com.arezip.weconnect.controller.admin.member;



import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

import com.cleopatra.spring.UIView;


@Controller
public class LoginController {
	@RequestMapping("weconnect/login")
	public View login() {
		return new UIView("weconnect/user/User.clx");
	}
}
