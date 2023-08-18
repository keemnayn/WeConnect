package com.arezip.weconnect.controller.member.teampost;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.View;

import com.arezip.weconnect.model.dto.TeamPostDTO;
import com.arezip.weconnect.service.TeamPostService;
import com.cleopatra.protocol.data.DataRequest;
import com.cleopatra.protocol.data.ParameterGroup;
import com.cleopatra.spring.JSONDataView;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@RequestMapping("/weconnect/member/teams") // submission action 도메인과 동일
@RequiredArgsConstructor
public class TeamPostRestController {
	private final TeamPostService teamPostService;

// 팀 워크보드 게시물 목록
	@GetMapping
	public View teamPostListPage(DataRequest dataRequest) {
		long memberId = 44;
		List<TeamPostDTO> teamPostList=teamPostService.getTeamPostList(memberId);
		System.out.println(teamPostList);
		dataRequest.setResponse("teamPostList", teamPostList); //데이터셋 이름과 같음
		return new JSONDataView();
	} 
   
 
	/*  
	@GetMapping("/team")
	public View teamPostPheed() {
		return new UIView("weconnect/member/TeamPost.clx");
	}
	*/
	  
	/*
	// 팀 워크보드 새 글 쓰기
	@PostMapping
	public View newPostSave() {
		return null;
	}
	
	*/
	@GetMapping("memberName")
	public View memberName(DataRequest dataRequest) {
		List<TeamPostDTO> teamPostList = teamPostService.getTeamPostList(44); 
		dataRequest.setResponse("teamPostList", teamPostList);
		return new JSONDataView();
	}
	
}
