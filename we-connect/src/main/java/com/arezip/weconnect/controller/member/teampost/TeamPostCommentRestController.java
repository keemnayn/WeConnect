package com.arezip.weconnect.controller.member.teampost;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.View;

import com.arezip.weconnect.model.dto.FreeBoardCommentDTO;
import com.arezip.weconnect.service.TeamPostService;
import com.cleopatra.protocol.data.DataRequest;
import com.cleopatra.protocol.data.ParameterGroup;
import com.cleopatra.spring.JSONDataView;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@RequestMapping("/weconnect/member/teams/comments") // submission action 도메인과 같음
@RequiredArgsConstructor
public class TeamPostCommentRestController {
	private final TeamPostService teamPostService;
	/*
	 * //댓글 조회
	 * 
	 * @GetMapping public View getTeamPostCommentList(HttpServletRequest request,
	 * DataRequest dataRequest) { ParameterGroup param =
	 * dataRequest.getParameterGroup("teamPostIdParam");//freeBoardId들어있는 dm long
	 * freeBoardId = Long.parseLong(param.getValue("freeBoardId"));
	 * List<FreeBoardCommentDTO> freeBoardCommentDTO =
	 * teamPostService.getTeamPostComment(freeBoardId);
	 * log.info("freeBoardCommentDTO {}",freeBoardCommentDTO);
	 * dataRequest.setResponse("freeBoardComment", freeBoardCommentDTO); return new
	 * JSONDataView(); }
	 * 
	 */
	
}
