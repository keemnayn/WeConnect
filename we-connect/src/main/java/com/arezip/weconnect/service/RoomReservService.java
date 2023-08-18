package com.arezip.weconnect.service;

import java.util.List;

import com.arezip.weconnect.model.dto.RoomReservDTO;

public interface RoomReservService {
	int insertRoomReserv(RoomReservDTO roomReservDTO);
	List<RoomReservDTO> findReservList();
}
