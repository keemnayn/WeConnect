package com.arezip.weconnect.mapper.admin;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.arezip.weconnect.model.dto.AttendanceDTO;

@Mapper
public interface AdminAttendanceMapper {
//	근태 조회
	List<AttendanceDTO> selectAllAttendance();

}
