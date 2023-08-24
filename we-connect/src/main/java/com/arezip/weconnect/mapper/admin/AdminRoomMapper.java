package com.arezip.weconnect.mapper.admin;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.arezip.weconnect.model.dto.RoomDTO;
import com.arezip.weconnect.model.dto.RoomReservDTO;

@Mapper
public interface AdminRoomMapper {
	//회의실 등록
	int insertRoomInfo(RoomDTO roomDTO);
	//회의실 리스트
	List<RoomDTO> getRoomList();
	
	//회의실 예약 리스트
	List<RoomReservDTO> getRoomReservList();
}
