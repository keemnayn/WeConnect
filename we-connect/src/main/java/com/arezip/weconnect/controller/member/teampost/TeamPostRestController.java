package com.arezip.weconnect.controller.member.teampost;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.View;

import com.arezip.weconnect.model.vo.TeamPostVO;
import com.arezip.weconnect.service.TeamPostService;
import com.cleopatra.protocol.data.DataRequest;
import com.cleopatra.spring.JSONDataView;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@RequestMapping("/weconnect/member/teamPost")
@RequiredArgsConstructor
public class TeamPostRestController {
	private final TeamPostService teamPostService;

// 팀 워크보드 게시물 목록
	@GetMapping
	public View getTeamPostList(DataRequest dataRequest) {
		List<TeamPostVO> teamPostList = teamPostService.getTeamPostList();
		dataRequest.setResponse("teamPost", teamPostList);
		return new JSONDataView();
	}
}
