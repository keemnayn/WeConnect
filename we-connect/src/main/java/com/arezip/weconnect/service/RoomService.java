package com.arezip.weconnect.service;

import java.util.List;

import com.arezip.weconnect.model.dto.RoomDTO;

public interface RoomService {
	//회의실 리스트
	List<RoomDTO> findRoomNo();

}
