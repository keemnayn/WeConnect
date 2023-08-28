package com.arezip.weconnect.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.arezip.weconnect.model.dto.RoomReservDTO;

@Mapper
public interface RoomReservMapper {
	//예약 등록
	int insertRoomReserv(RoomReservDTO roomReservDTO);
	//예약 목록 조회
	List<RoomReservDTO> findReservList();
	//예약 수정
	int updateRoomReserv(RoomReservDTO roomReservDTO);
	//예약 삭제
	int deleteRoomReserv(RoomReservDTO roomReservDTO);
	
}
