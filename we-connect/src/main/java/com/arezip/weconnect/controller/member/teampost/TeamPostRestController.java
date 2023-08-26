package com.arezip.weconnect.controller.member.teampost;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.View;

import com.arezip.weconnect.model.dto.TeamPostDTO;
import com.arezip.weconnect.service.TeamPostService;
import com.cleopatra.protocol.data.DataRequest;
import com.cleopatra.protocol.data.ParameterGroup;
import com.cleopatra.spring.JSONDataView;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
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
		List<TeamPostDTO> teamPostList = teamPostService.getTeamPostList();
		System.out.println(teamPostList);
		dataRequest.setResponse("teamPostList", teamPostList); // 데이터셋 이름과 같음
		System.out.println("sss");
		return new JSONDataView();
	}

	// 팀 워크보드 새 글 쓰기
	@PostMapping
	public View postTeamPost(DataRequest dataRequest, HttpServletRequest request) {
		ParameterGroup param = dataRequest.getParameterGroup("teampostCreateParam");
		if (param != null) {
			HttpSession session = request.getSession();
			Long memberId = (Long) session.getAttribute("memberId");
			String teamPostTitle = param.getValue("teamPostTitle");
			String teamPostContent = param.getValue("teamPostContent");
			String projectId=param.getValue("projectId");
			log.info("teamPostTitle {}", teamPostTitle);
			log.info("teamPostContent {}", teamPostContent);
			TeamPostDTO teamPostDTO = new TeamPostDTO();
			teamPostDTO.setMemberId(memberId);
			teamPostDTO.setTeamPostTitle(teamPostTitle);
			teamPostDTO.setTeamPostContent(teamPostContent);
			teamPostService.addTeamPost(teamPostDTO);
		}
		return new JSONDataView();
	}
}

/*
 * @GetMapping("memberName") public View memberName(DataRequest dataRequest) {
 * List<TeamPostDTO> teamPostList = teamPostService.getTeamPostList(434);
 * dataRequest.setResponse("teamPostList", teamPostList); return new
 * JSONDataView(); }
 * 
 * }
 */
