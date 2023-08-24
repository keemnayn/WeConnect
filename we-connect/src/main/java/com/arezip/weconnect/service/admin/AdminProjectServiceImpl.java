package com.arezip.weconnect.service.admin;

import java.util.List;

import org.springframework.stereotype.Service;

import com.arezip.weconnect.mapper.admin.AdminProjectMapper;
import com.arezip.weconnect.model.dto.ProjectDTO;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AdminProjectServiceImpl implements AdminProjectService {
	private final AdminProjectMapper adminProjectMapper;

//	프로젝트 리스트
	@Override
	public List<ProjectDTO> retrieveAllProjects() {
		return adminProjectMapper.getAllProjects();
	}
}
