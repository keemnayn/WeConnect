package com.arezip.weconnect.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.arezip.weconnect.mapper.RoomReservMapper;
import com.arezip.weconnect.model.dto.RoomReservDTO;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
@RequiredArgsConstructor
public class RoomReservServiceImpl implements RoomReservService {
	private final RoomReservMapper roomReservMapper;

	@Override
	public int insertRoomReserv(RoomReservDTO roomReservDTO) {
		return roomReservMapper.insertRoomReserv(roomReservDTO);
	}

	@Override
	public List<RoomReservDTO> findReservList() {
		return roomReservMapper.findReservList();
	}

	@Override
	public int updateRoomReserv(RoomReservDTO roomReservDTO) {
		return roomReservMapper.updateRoomReserv(roomReservDTO);
	}

	@Override
	public int deleteRoomReserv(RoomReservDTO roomReservDTO) {
		return roomReservMapper.deleteRoomReserv(roomReservDTO);
	}

}
