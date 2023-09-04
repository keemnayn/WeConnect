package com.arezip.weconnect.test.roomReserv;

import static org.junit.jupiter.api.Assertions.assertNotEquals;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.arezip.weconnect.mapper.RoomReservMapper;
import com.arezip.weconnect.model.dto.RoomDTO;
import com.arezip.weconnect.model.dto.RoomReservDTO;
import com.arezip.weconnect.service.RoomReservService;
import com.arezip.weconnect.service.RoomService;

import lombok.extern.slf4j.Slf4j;

@SpringBootTest
@Slf4j
public class RoomReservTest {
	@Autowired
	RoomReservMapper roomReservMapper;
	
	@Autowired
	RoomReservService roomReservService;
	
	@Autowired
	RoomService roomService;
	
	//예약 등록
	@Test
	void insertRoomReserv() {
		RoomReservDTO roomReservDTO = new RoomReservDTO();
		roomReservDTO.setRoomReservDate("20230811");
		roomReservDTO.setRoomReservStartTime(9);
		roomReservDTO.setRoomReservEndTime(10);
		roomReservDTO.setProposal("unit test");
		roomReservDTO.setMemberId(24); 
		roomReservDTO.setRoomId(1);
		int result = roomReservService.insertRoomReserv(roomReservDTO);
		assertNotEquals(0, result);
	}
	//회의실 조회
	@Test
	void findRoomList() {
		List<RoomDTO> list = roomService.findRoomNo();
		list.forEach(room -> log.info(room.toString()));
	}
	
	//회의실 예약 조회
	@Test
	void findRoomReservList() {
		List<RoomReservDTO> list = roomReservService.findReservList();
		list.forEach(reserv -> log.info(reserv.toString()));
	}
	
}
