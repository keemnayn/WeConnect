package com.arezip.weconnect.service;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.arezip.weconnect.mapper.CarlendarProjectMapper;
import com.arezip.weconnect.model.dto.MemberDTO;
import com.arezip.weconnect.model.dto.ProjectDTO;
import com.arezip.weconnect.model.dto.ProjectMemberDTO;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
@RequiredArgsConstructor
public class CalendarProjectServiceImpl implements CalendarProjectService {
	private final CarlendarProjectMapper carlendarProjectMapper;

	@Override
	public List<ProjectDTO> findProjectByMemberId(long memberId) {
		return carlendarProjectMapper.findProjectByMemberId(memberId);
	}

	@Transactional
	@Override
	public void insertProject(ProjectDTO projectDTO, long departmentId) {
		ProjectDTO project = new ProjectDTO();
		project.setProjectName(projectDTO.getProjectName());
		project.setProjectStart(projectDTO.getProjectStart());
		project.setProjectEnd(projectDTO.getProjectEnd());
		project.setMemberId(projectDTO.getMemberId());
		carlendarProjectMapper.insertProject(project);
		long projectId = project.getProjectId();

		List<MemberDTO> members = carlendarProjectMapper.selectMemberDepartment(departmentId);
		for (MemberDTO memberDTO : members) {
			ProjectMemberDTO projectMemberDTO = new ProjectMemberDTO();
			projectMemberDTO.setMemberId(memberDTO.getMemberId());
			projectMemberDTO.setProjectId(projectId);
			insertProjectWithMember(projectMemberDTO);
		}
	}

	@Transactional
	@Override
	public void insertProjectWithMember(ProjectMemberDTO projectMemberDTO) {
		carlendarProjectMapper.insertProjectMember(projectMemberDTO);
	}

	@Override
	public long selectDepartmentId(long memberId) {
		return carlendarProjectMapper.selectDepartmentId(memberId);
	}
}
