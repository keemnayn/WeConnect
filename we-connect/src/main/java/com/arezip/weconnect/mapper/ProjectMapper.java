package com.arezip.weconnect.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.arezip.weconnect.model.dto.ProjectDTO;

@Mapper
public interface ProjectMapper {
// 프로젝트 전체 조회
	List<ProjectDTO> selectProjectList();
}
