package com.arezip.weconnect.controller.member.project;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.arezip.weconnect.service.ProjectService;
import com.arezip.weconnect.service.TeamPostService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@RequestMapping("/weconnect/member/project")
@RequiredArgsConstructor
public class ProjectRestController {
	private final ProjectService projectService;
	private final TeamPostService teamPostService;
}
