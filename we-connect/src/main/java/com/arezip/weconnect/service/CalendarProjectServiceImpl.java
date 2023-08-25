package com.arezip.weconnect.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.arezip.weconnect.mapper.CarlendarProjectMapper;
import com.arezip.weconnect.model.dto.ProjectDTO;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;


@Service
@Slf4j
@RequiredArgsConstructor
public class CalendarProjectServiceImpl implements CalendarProjectService {
	private final CarlendarProjectMapper carlendarProjectMapper;
	@Override
	public List<ProjectDTO> findProjectStartEnd(long memberId) {
		// TODO 캘린더에 뿌려줄 프로젝트 시작일, 마감일  
		return carlendarProjectMapper.findProjectStartEnd(memberId);
	}

}
