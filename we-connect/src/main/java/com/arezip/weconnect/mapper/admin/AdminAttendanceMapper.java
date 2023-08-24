package com.arezip.weconnect.mapper.admin;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.arezip.weconnect.model.dto.AttendanceDTO;

@Mapper
public interface AdminAttendanceMapper {
//	근태 조회
	List<AttendanceDTO> selectAllAttendance();

//	검색
	List<AttendanceDTO> selectAttendanceByCriteria(Map<String, String> searchParams);

}
