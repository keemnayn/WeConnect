package com.arezip.weconnect.controller.admin.roomReserv;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.View;

import com.arezip.weconnect.model.dto.RoomDTO;
import com.arezip.weconnect.model.dto.RoomReservDTO;
import com.arezip.weconnect.service.admin.AdminRoomService;
import com.cleopatra.protocol.data.DataRequest;
import com.cleopatra.protocol.data.ParameterGroup;
import com.cleopatra.spring.JSONDataView;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("weconnect/admin/room-reserv")
@RequiredArgsConstructor
@Slf4j
public class AdminRoomReservRestController {
	private final AdminRoomService adminRoomService;
	
	//회의실 조회
	@GetMapping("/room")
	public View getRoomList(DataRequest dataRequest) {
		List<RoomDTO> roomList = adminRoomService.getRoomList();
		dataRequest.setResponse("roomList", roomList);
		return new JSONDataView();
	}
	
	//회의실 예약 조회
	@GetMapping
	public View getRoomReservList(DataRequest dataRequest) {
		List<RoomReservDTO> roomReservList = adminRoomService.getRoomReservList();
		dataRequest.setResponse("reservList", roomReservList);
		return new JSONDataView();
	}
	
	@PostMapping
	public View insertRoom(DataRequest dataRequest) {
		ParameterGroup param = dataRequest.getParameterGroup("roomInfoParam");
		log.info("param {}", param);
		String roomName = param.getValue("roomName");
		log.info("roomName {}", roomName);
		RoomDTO roomDTO = new RoomDTO();
		roomDTO.setRoomName(roomName);
		adminRoomService.insertRoomInfo(roomDTO);
		return new JSONDataView();
	}
}
