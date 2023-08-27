package com.arezip.weconnect.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.arezip.weconnect.mapper.ProjectMapper;
import com.arezip.weconnect.mapper.TeamPostMapper;
import com.arezip.weconnect.model.dto.ProjectDTO;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
@RequiredArgsConstructor
public class ProjectServiceImpl implements ProjectService {
	private final ProjectMapper projectMapper;
	
// 프로젝트 전체 조회
	@Override
	public List<ProjectDTO> getProjectList() {
		return projectMapper.selectProjectList();
	}

}
