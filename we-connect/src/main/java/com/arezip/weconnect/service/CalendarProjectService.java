package com.arezip.weconnect.service;

import java.util.List;

import com.arezip.weconnect.model.dto.ProjectDTO;

public interface CalendarProjectService {
	List<ProjectDTO> findProjectByMemberId(long memberId);
	int insertProject(ProjectDTO projectDTO);
}
