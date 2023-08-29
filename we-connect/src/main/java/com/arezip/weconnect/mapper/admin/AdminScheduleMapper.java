package com.arezip.weconnect.mapper.admin;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.arezip.weconnect.model.dto.ScheduleDTO;

@Mapper
public interface AdminScheduleMapper {
	List<ScheduleDTO> selectAnnualLeaves();

	List<ScheduleDTO> selectProjectSchedules();
}