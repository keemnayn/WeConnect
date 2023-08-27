package com.arezip.weconnect.service;

import java.util.List;

import com.arezip.weconnect.model.dto.ProjectDTO;

public interface ProjectService {
	
// 프로젝트 전체 조회
	List<ProjectDTO> getProjectList();

}
