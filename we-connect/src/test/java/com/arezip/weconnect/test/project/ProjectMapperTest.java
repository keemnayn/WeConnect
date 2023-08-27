package com.arezip.weconnect.test.project;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.arezip.weconnect.mapper.ProjectMapper;
import com.arezip.weconnect.model.dto.ProjectDTO;
import com.arezip.weconnect.model.dto.ProposalDTO;

import lombok.extern.slf4j.Slf4j;

@SpringBootTest
@Slf4j
public class ProjectMapperTest {
	@Autowired
	ProjectMapper projectMapper;
	
// 프로젝트 전체 목록 Mapper
	@Test
	void selectProjectListTest() {
		List<ProjectDTO> list = projectMapper.selectProjectList();
		list.forEach(project -> log.info(project.toString()));
	}
}
