package com.arezip.weconnect.controller.member.teampost;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

import com.cleopatra.spring.UIView;

@Controller
@RequestMapping("/teamPost")
public class TeamPostController {
	@GetMapping("teamPost")
	public View listPage() {
		return new UIView("project/teamPost.clx");
	}

}
