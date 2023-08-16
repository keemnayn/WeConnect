package com.arezip.weconnect.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.arezip.weconnect.model.dto.RoomReservDTO;

@Mapper
public interface RoomReservMapper {
	int insertRoomReserv(RoomReservDTO roomReservDTO);
}
