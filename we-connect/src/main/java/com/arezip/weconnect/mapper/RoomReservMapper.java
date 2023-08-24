package com.arezip.weconnect.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.arezip.weconnect.model.dto.RoomReservDTO;

@Mapper
public interface RoomReservMapper {
	int insertRoomReserv(RoomReservDTO roomReservDTO);
	List<RoomReservDTO> findReservList();
	List<RoomReservDTO> findBookedRoom();
}
