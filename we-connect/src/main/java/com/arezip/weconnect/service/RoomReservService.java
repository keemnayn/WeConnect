package com.arezip.weconnect.service;

import java.util.List;

import com.arezip.weconnect.model.dto.RoomReservDTO;

public interface RoomReservService {
	//예약 등록
	int insertRoomReserv(RoomReservDTO roomReservDTO);
	//예약 조회
	List<RoomReservDTO> findReservList();
	//예약 수정
	int updateRoomReserv(RoomReservDTO roomReservDTO);
	//예약 삭제
	int deleteRoomReserv(RoomReservDTO roomReservDTO);
}
