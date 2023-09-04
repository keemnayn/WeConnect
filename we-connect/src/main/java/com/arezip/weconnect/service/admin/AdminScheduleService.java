package com.arezip.weconnect.service.admin;

import java.util.List;

import com.arezip.weconnect.model.dto.ScheduleDTO;

public interface AdminScheduleService {
	List<ScheduleDTO> getAnnualLeaves();

	List<ScheduleDTO> getProjectSchedules();
}
