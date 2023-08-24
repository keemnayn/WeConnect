package com.arezip.weconnect.test.admin.attendance;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.arezip.weconnect.mapper.admin.AdminAttendanceMapper;
import com.arezip.weconnect.model.dto.AttendanceDTO;

import lombok.extern.slf4j.Slf4j;

@SpringBootTest
@Slf4j
public class AdminAttendanceMapperTest {
	@Autowired
	AdminAttendanceMapper adminAttendanceMapper;

//	근태 조회
	@Test
	void selectAllAttendanceTest() {
		List<AttendanceDTO> list = adminAttendanceMapper.selectAllAttendance();
		list.forEach(attendances -> log.info(attendances.toString()));
		assertNotNull(list);
	}

//	근태 검색
	@Test
	void selectAttendanceByCriteriaTest() {
		Map<String, String> searchParams = new HashMap<>();
		searchParams.put("searchType", "all");
		searchParams.put("searchText", "지각");
		List<AttendanceDTO> list = adminAttendanceMapper.selectAttendanceByCriteria(searchParams);
		list.forEach(attendances -> log.info(attendances.toString()));
		assertNotNull(list);
	}
}
