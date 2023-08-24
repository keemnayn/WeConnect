package com.arezip.weconnect.service.admin;

import java.util.List;

import org.springframework.stereotype.Service;

import com.arezip.weconnect.mapper.admin.AdminRoomMapper;
import com.arezip.weconnect.model.dto.RoomDTO;
import com.arezip.weconnect.model.dto.RoomReservDTO;

import lombok.RequiredArgsConstructor;
@Service
@RequiredArgsConstructor
public class AdminRoomServiceImpl implements AdminRoomService{
	private final AdminRoomMapper adminRoomMapper;
	//회의실 등록
	@Override
	public int insertRoomInfo(RoomDTO roomDTO) {
		return adminRoomMapper.insertRoomInfo(roomDTO);
	}
	//회의실 리스트
	@Override
	public List<RoomDTO> getRoomList() {
		return adminRoomMapper.getRoomList();
	}
	//회의실 예약 리스트
	@Override
	public List<RoomReservDTO> getRoomReservList() {
		return adminRoomMapper.getRoomReservList();
	}
	
}
