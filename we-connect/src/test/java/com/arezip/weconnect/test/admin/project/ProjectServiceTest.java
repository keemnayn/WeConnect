package com.arezip.weconnect.test.admin.project;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.arezip.weconnect.model.dto.ProjectDTO;
import com.arezip.weconnect.service.admin.AdminProjectService;

import lombok.extern.slf4j.Slf4j;

@SpringBootTest
@Slf4j
public class ProjectServiceTest {
	@Autowired
	AdminProjectService adminProjectService;

	@Test
	void retrieveAllProjectsTest() {
		List<ProjectDTO> list = adminProjectService.retrieveAllProjects();
		list.forEach(projects -> log.info(projects.toString()));
		assertNotNull(list);
	}
}
