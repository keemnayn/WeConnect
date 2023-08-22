package com.arezip.weconnect.service.admin;

import java.util.List;

import com.arezip.weconnect.model.dto.ProjectDTO;

public interface AdminProjectService {
	List<ProjectDTO> retrieveAllProjects();
}