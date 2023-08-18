package com.arezip.weconnect.controller.member.teampost;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.View;

import com.arezip.weconnect.service.TeamPostService;
import com.cleopatra.spring.UIView;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@RequestMapping("/weconnect/member/pheed") // submission action 도메인과 동일
@RequiredArgsConstructor
public class TeamPostRestController {
	private final TeamPostService teamPostService;

// 팀 워크보드 게시물 목록(피드형)
	@GetMapping("/{teamPostId}")
	public View teamPostPheed() {
		return new UIView("weconnect/member/TeamPost.clx");
	}

	// 팀 워크보드 새 글 쓰기
	@PostMapping
	public View newPostSave() {
		return null;
	}
}
