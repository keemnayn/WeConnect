package com.arezip.weconnect.controller.admin.project;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.View;

import com.arezip.weconnect.model.dto.ProjectDTO;
import com.arezip.weconnect.service.admin.AdminProjectService;
import com.cleopatra.protocol.data.DataRequest;
import com.cleopatra.spring.JSONDataView;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@RequiredArgsConstructor
@RequestMapping("/weconnect/admin/projects")
public class AdminProjectRestController {
	private final AdminProjectService adminProjectService;

	@GetMapping
	public View listAllProjects(DataRequest dataRequest) {
		List<ProjectDTO> projectList = adminProjectService.retrieveAllProjects();
		projectList.forEach(projects -> log.info(projects.toString()));
		dataRequest.setResponse("projectList", projectList);
		return new JSONDataView();
	}
}