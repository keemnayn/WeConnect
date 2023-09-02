package com.arezip.weconnect.controller.member.teampost;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.View;

import com.arezip.weconnect.model.dto.MemberDTO;
import com.arezip.weconnect.model.dto.ProjectDTO;
import com.arezip.weconnect.model.dto.TeamPostDTO;
import com.arezip.weconnect.service.ProjectService;
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
	private final ProjectService projectService;

// 팀 워크보드 게시물 목록
	@GetMapping("/list")
	public View GetTeamPostListPage(DataRequest dataRequest) {
		List<TeamPostDTO> teamPostList = teamPostService.getTeamPostList();
		System.out.println(teamPostList);
		dataRequest.setResponse("teamPostList", teamPostList); // 데이터셋 이름과 같음
		return new JSONDataView();
	}

// 팀 워크보드 상세
	@GetMapping("detail")
	public View getMemberId(DataRequest dataRequest, HttpServletRequest request) {
		HttpSession session = request.getSession();
		MemberDTO memberDTO = new MemberDTO();
		Long memberId = (Long) session.getAttribute("memberId");
		memberDTO.setMemberId(memberId);
		dataRequest.setResponse("memberDTO", memberDTO);
		return new JSONDataView();
	}

// 팀 워크보드 새 글 쓰기
	@PostMapping
	public View PostTeamPost(DataRequest dataRequest, HttpServletRequest request) {
		ParameterGroup param = dataRequest.getParameterGroup("teamPostCreateParam");
		if (param != null) {
			HttpSession session = request.getSession();
			Long memberId = (Long) session.getAttribute("memberId");
			String teamPostTitle = param.getValue("teamPostTitle");
			String teamPostContent = param.getValue("teamPostContent");
			// Long projectId=(Long) session.getAttribute("projectId");
			long projectId = Long.parseLong(param.getValue("projectId"));
			log.info("memberId {}", memberId);
			log.info("teamPostTitle {}", teamPostTitle);
			log.info("teamPostContent {}", teamPostContent);
			log.info("projectId {}", projectId);
			TeamPostDTO teamPostDTO = new TeamPostDTO();
			teamPostDTO.setMemberId(memberId);
			teamPostDTO.setTeamPostTitle(teamPostTitle);
			teamPostDTO.setTeamPostContent(teamPostContent);
			teamPostDTO.setProjectId(projectId);
			teamPostService.addTeamPost(teamPostDTO);
		}
		return new JSONDataView();
	}

	// 콤보박스에 프로젝트 정보 가져오기

	@GetMapping
	public View ListProjectName(DataRequest dataRequest) {
		List<ProjectDTO> projectList = projectService.getProjectList();
		dataRequest.setResponse("projectInfo", projectList);
		log.info("프로젝트 리스트{}:", projectService.getProjectList());
		return new JSONDataView();
	}

// 팀 워크보드 수정
	@PutMapping
	public View updateTeamPost(DataRequest dataRequest, HttpServletRequest request) {
		ParameterGroup param = dataRequest.getParameterGroup("teamPostUpdateParam");
		// "teamPostUpdateParam" 파라미터 그룹에서 데이터를 추출하여 처리
		if (param != null) {
			HttpSession session = request.getSession();
			Long memberId = (Long) session.getAttribute("memberId");
			Long teamPostId = Long.parseLong(param.getValue("teamPostId"));
			String teamPostTitle = param.getValue("teamPostTitle");
			String teamPostContent = param.getValue("teamPostContent");
			System.out.println(memberId);
			// 추출된 데이터를 로그로 출력
			log.info("memberId {}", memberId);
			log.info("teamPostId {}", teamPostId);
			log.info("teamPostTitle {}", teamPostTitle);
			log.info("teamPostContent {}", teamPostContent);
			// 추출된 데이터를 ProposalDTO 객체에 설정
			TeamPostDTO teamPostDTO = new TeamPostDTO();
			teamPostDTO.setMemberId(memberId);
			teamPostDTO.setTeamPostId(teamPostId);
			teamPostDTO.setTeamPostTitle(teamPostTitle);
			teamPostDTO.setTeamPostContent(teamPostContent);
			// Service 계층의 updateProposal 메서드를 호출하여 건의사항을 수정
			System.out.println("saas" + teamPostDTO);
			teamPostService.updateTeamPost(teamPostDTO);
		}
		// JSON 형식의 응답을 반환
		return new JSONDataView();
	}

	// 팀 워크보드 삭제
	@DeleteMapping
	public View deleteTeamPost(DataRequest dataRequest, HttpServletRequest request) {
		ParameterGroup param = dataRequest.getParameterGroup("teamPostIdParam");
		// "proposalUpdateParam" 파라미터 그룹에서 데이터를 추출하여 처리
		if (param != null) {
			HttpSession session = request.getSession();
			Long memberId = (Long) session.getAttribute("memberId");
			Long teamPostId = Long.parseLong(param.getValue("teamPostId"));
			// 추출된 데이터를 로그로 출력
			log.info("memberId {}", memberId);
			log.info("teamPostId {}", teamPostId);
			// 추출된 데이터를 ProposalDTO 객체에 설정
			TeamPostDTO teamPostDTO = new TeamPostDTO();
			teamPostDTO.setMemberId(memberId);
			teamPostDTO.setTeamPostId(teamPostId);
			// Service 계층의 deleteProposal 메서드를 호출하여 건의사항을 수정
			teamPostService.deleteTeamPost(teamPostDTO);
		}
		// JSON 형식의 응답을 반환
		return new JSONDataView();
	}

}
