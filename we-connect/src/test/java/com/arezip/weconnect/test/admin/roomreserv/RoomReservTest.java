package com.arezip.weconnect.test.admin.roomreserv;

import static org.junit.jupiter.api.Assertions.assertNotEquals;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.arezip.weconnect.mapper.admin.AdminRoomMapper;
import com.arezip.weconnect.model.dto.RoomDTO;
import com.arezip.weconnect.model.dto.RoomReservDTO;

import lombok.extern.slf4j.Slf4j;

@SpringBootTest
@Slf4j
public class RoomReservTest {
	@Autowired
	AdminRoomMapper adminRoomMapper;
	//회의실 등록
	@Test
	void insertRoom() {
		RoomDTO roomDTO = new RoomDTO();
		roomDTO.setRoomName("6층 대회의실");
		int result = adminRoomMapper.insertRoomInfo(roomDTO);
		assertNotEquals(0, result);
	}
	
	//회의실 조회
	@Test
	void findRoomList() {
		List<RoomDTO> list = adminRoomMapper.getRoomList();
		list.forEach(room -> log.info(room.toString()));
	}
	
	//회의실 예약 조회
	@Test
	void findRoomReservList() {
		List<RoomReservDTO> list = adminRoomMapper.getRoomReservList();
		list.forEach(reserv -> log.info(reserv.toString()));
	}
}
