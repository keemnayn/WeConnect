package com.arezip.weconnect.controller.member.project;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.View;
import com.arezip.weconnect.service.ProjectService;
import com.arezip.weconnect.service.TeamPostService;
import com.arezip.weconnect.model.dto.ProjectDTO;
import com.arezip.weconnect.service.CalendarProjectService;
import com.cleopatra.protocol.data.DataRequest;
import com.cleopatra.protocol.data.ParameterGroup;
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
	@PostMapping
	public View insertProjectIdAllMembers(DataRequest dataRequest, HttpServletRequest request) {
		HttpSession session =request.getSession();
		long memberId = (long) session.getAttribute("memberId");
		ParameterGroup parameterGroup =dataRequest.getParameterGroup("dmCalendar");
		String projectName = parameterGroup.getValue("projectName");
		String projectStart = parameterGroup.getValue("projectStart");
		String projectEnd = parameterGroup.getValue("projectEnd");
		long departmentId =calendarProjectService.selectDepartmentId(memberId);
		log.info("departmentId {}",departmentId);
		ProjectDTO projectDTO = new ProjectDTO();
		projectDTO.setProjectName(projectName);
		projectDTO.setProjectStart(projectStart);
		projectDTO.setProjectEnd(projectEnd);
		projectDTO.setMemberId(memberId);
		calendarProjectService.insertProject(projectDTO, departmentId);
		return new JSONDataView();
	}
}
