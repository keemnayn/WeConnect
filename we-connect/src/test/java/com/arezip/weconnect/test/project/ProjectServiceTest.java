package com.arezip.weconnect.test.project;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.arezip.weconnect.model.dto.ProjectDTO;
import com.arezip.weconnect.service.ProjectService;

import lombok.extern.slf4j.Slf4j;

@SpringBootTest
@Slf4j
public class ProjectServiceTest {
	@Autowired
	ProjectService projectService;
	
// 프로젝트 전체 목록 service
	@Test
	void getProjectListTest() {
		List<ProjectDTO> list = projectService.getProjectList();
		list.forEach(project -> log.info(project.toString()));
	}
}
