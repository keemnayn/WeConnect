package com.arezip.weconnect.controller.member.project;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.View;

<<<<<<< HEAD
import com.arezip.weconnect.service.ProjectService;
import com.arezip.weconnect.service.TeamPostService;

=======
import com.arezip.weconnect.model.dto.ProjectDTO;
import com.arezip.weconnect.service.CalendarProjectService;
import com.cleopatra.protocol.data.DataRequest;
import com.cleopatra.spring.JSONDataView;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@RequestMapping("/weconnect/member/project")
@RequiredArgsConstructor
public class ProjectRestController {
	private final ProjectService projectService;
	private final TeamPostService teamPostService;
	private final CalendarProjectService calendarProjectService;
	
	@GetMapping
	public View findProjectList(DataRequest dataRequest,HttpServletRequest request) {
		HttpSession session =request.getSession();
		long memberId = (long) session.getAttribute("memberId");
		List<ProjectDTO> projectList = calendarProjectService.findProjectByMemberId(memberId);
		dataRequest.setResponse("projectList", projectList);
		return new JSONDataView();
	}
}
