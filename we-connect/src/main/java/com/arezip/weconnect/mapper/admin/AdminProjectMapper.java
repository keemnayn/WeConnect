package com.arezip.weconnect.mapper.admin;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.arezip.weconnect.model.dto.ProjectDTO;

@Mapper
public interface AdminProjectMapper {

	List<ProjectDTO> getAllProjects();

}
