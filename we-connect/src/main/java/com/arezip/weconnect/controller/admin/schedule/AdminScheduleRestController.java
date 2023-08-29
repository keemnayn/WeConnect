package com.arezip.weconnect.controller.admin.schedule;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.View;

import com.arezip.weconnect.model.dto.ScheduleDTO;
import com.arezip.weconnect.service.admin.AdminScheduleService;
import com.cleopatra.protocol.data.DataRequest;
import com.cleopatra.spring.JSONDataView;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("weconnect/admin/schedules")
@RequiredArgsConstructor
@Slf4j
public class AdminScheduleRestController {
	private final AdminScheduleService adminScheduleService;

	@GetMapping
	public View getAllSchedules(DataRequest dataRequest) {
		List<ScheduleDTO> annualLeavesList = adminScheduleService.getAnnualLeaves();
		List<ScheduleDTO> projectScheduleList = adminScheduleService.getProjectSchedules();
		annualLeavesList.forEach(annualLeaves -> log.info(annualLeaves.toString()));
		projectScheduleList.forEach(projectSchedules -> log.info(projectSchedules.toString()));
		dataRequest.setResponse("annualLeavesList", annualLeavesList);
		dataRequest.setResponse("projectScheduleList", projectScheduleList);
		return new JSONDataView();
	}
}