package com.arezip.weconnect.service;

import java.util.List;

import com.arezip.weconnect.model.dto.ProjectDTO;
import com.arezip.weconnect.model.dto.ProjectMemberDTO;

public interface CalendarProjectService {
	List<ProjectDTO> findProjectByMemberId(long memberId);
	void insertProject(ProjectDTO projectDTO, long departmentId);
	long selectDepartmentId(long memberId);
	void insertProjectWithMember(ProjectMemberDTO projectMemberDTO);
}
