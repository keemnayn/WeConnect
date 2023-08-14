package com.arezip.weconnect.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.View;

import com.arezip.weconnect.model.vo.TeamPostVO;
import com.arezip.weconnect.service.TeamPostService;
import com.cleopatra.protocol.data.DataRequest;
import com.cleopatra.spring.JSONDataView;
import com.cleopatra.spring.UIView;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@RequestMapping("/weconnect")
@RequiredArgsConstructor
public class TeamPostRestController {
	private final TeamPostService teamPostService;
	
	@GetMapping("project.do")
	public View listPage() {
		return new UIView("project/teamPost.clx");
	}
	@GetMapping("teamPost.do")
	@ResponseBody
	public View getTeamPostList(DataRequest dataRequest) {
		List<TeamPostVO> teamPostList=TeamPostService.getTeamPostList();
		dataRequest.setResponse("teamPost", teamPostList);
		return new JSONDataView();
	}
}
