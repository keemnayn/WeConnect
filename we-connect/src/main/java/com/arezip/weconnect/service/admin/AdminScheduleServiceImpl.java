package com.arezip.weconnect.service.admin;

import java.util.List;

import org.springframework.stereotype.Service;

import com.arezip.weconnect.mapper.admin.AdminScheduleMapper;
import com.arezip.weconnect.model.dto.ScheduleDTO;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AdminScheduleServiceImpl implements AdminScheduleService {
	private final AdminScheduleMapper adminScheduleMapper;

	@Override
	public List<ScheduleDTO> getAnnualLeaves() {
		return adminScheduleMapper.selectAnnualLeaves();
	}

	@Override
	public List<ScheduleDTO> getProjectSchedules() {
		return adminScheduleMapper.selectProjectSchedules();
	}
}
