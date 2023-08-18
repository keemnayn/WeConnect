package com.arezip.weconnect.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.arezip.weconnect.mapper.RoomMapper;
import com.arezip.weconnect.model.dto.RoomDTO;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
@RequiredArgsConstructor
public class RoomServiceImpl implements RoomService {
	private final RoomMapper roomMapper;

	@Override
	public List<RoomDTO> findRoomNo() {
		return roomMapper.findRoomNo();
	}

}
