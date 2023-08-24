package com.arezip.weconnect.test.admin.project;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.arezip.weconnect.mapper.admin.AdminProjectMapper;
import com.arezip.weconnect.model.dto.ProjectDTO;

import lombok.extern.slf4j.Slf4j;

@SpringBootTest
@Slf4j
public class ProjectMapperTest {
	@Autowired
	AdminProjectMapper adminProjectMapper;

	@Test
	void getAllProjectsTest() {
		List<ProjectDTO> list = adminProjectMapper.getAllProjects();
		list.forEach(projects -> log.info(projects.toString()));
		assertNotNull(list);
	}
}
