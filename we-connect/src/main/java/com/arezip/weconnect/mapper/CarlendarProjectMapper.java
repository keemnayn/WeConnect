package com.arezip.weconnect.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.arezip.weconnect.model.dto.ProjectDTO;

@Mapper
public interface CarlendarProjectMapper {
	List<ProjectDTO> findProjectStartEnd(long memberId);
}
