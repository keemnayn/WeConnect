package com.arezip.weconnect.controller.admin.carlendar;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.View;

import com.arezip.weconnect.model.dto.ProjectDTO;
import com.arezip.weconnect.service.CalendarProjectService;
import com.cleopatra.protocol.data.DataRequest;
import com.cleopatra.spring.JSONDataView;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@RequiredArgsConstructor
@RequestMapping("/weconnect/admin/carlendar")
public class CarlendarController {
	private final CalendarProjectService calendarProjectService;

	@GetMapping
	public View findProjectStartEnd(HttpServletRequest request, DataRequest dataRequest) {
		HttpSession session = request.getSession();
		Long memberId = (Long) session.getAttribute("memberId");
		List<ProjectDTO> list = calendarProjectService.findProjectByMemberId(memberId);
		dataRequest.setResponse("project", list);
		log.info("프로젝트:{}", list);
		return new JSONDataView();
	}
}
