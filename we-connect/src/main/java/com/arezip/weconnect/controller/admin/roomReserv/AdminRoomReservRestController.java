package com.arezip.weconnect.controller.admin.roomReserv;

import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.View;

import com.arezip.weconnect.model.dto.RoomDTO;
import com.arezip.weconnect.model.dto.RoomReservDTO;
import com.arezip.weconnect.service.admin.AdminRoomService;
import com.cleopatra.protocol.data.DataRequest;
import com.cleopatra.protocol.data.ParameterGroup;
import com.cleopatra.protocol.data.ParameterRow;
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
	
	//회의실 등록
	@PostMapping
	public View insertRoom(DataRequest dataRequest) {
		ParameterGroup param = dataRequest.getParameterGroup("roomInfoParam");
		if (param != null) {
			log.info("param {}", param);
			String roomName = param.getValue("roomName");
			log.info("roomName {}", roomName);
			RoomDTO roomDTO = new RoomDTO();
			roomDTO.setRoomName(roomName);
			adminRoomService.insertRoomInfo(roomDTO);
		}
		return new JSONDataView();
	}
	//회의실 수정
	@PutMapping
	public View updateRoom(DataRequest dataRequest) {
		ParameterGroup param = dataRequest.getParameterGroup("roomInfoParam");
		if (param != null) {
			String roomName = param.getValue("roomName");
			log.info("roomName {}", roomName);
			RoomDTO roomDTO = new RoomDTO();
			roomDTO.setRoomName(roomName);
			adminRoomService.updateRoom(roomDTO);
		}
		return new JSONDataView();
	}
	
	
	//회의실 삭제
	@DeleteMapping
	public View deleteRoom(DataRequest dataRequest) {
		System.out.println("=======roomDelete=======");
		ParameterGroup param = dataRequest.getParameterGroup("roomList");
		log.info("param {}",param);
		if(param != null) {
			Iterator<ParameterRow> iter = param.getDeletedRows();
			log.info("iter {}",iter);
			while (iter.hasNext()) {
				Map<String, String> rowMap = iter.next().toMap();
				RoomDTO roomDTO = mapTRoomDTO(rowMap);
				log.info("roomDTO {}",roomDTO);
				adminRoomService.deleteRoom(roomDTO);
			}
		}
		return new JSONDataView();
	}
	//여러 항목 선택 후 삭제 위해 Map을 DTO 타입으로 변경하는 메서드
	private RoomDTO mapTRoomDTO(Map<String, String> rowMap) {
		RoomDTO roomDTO = new RoomDTO();
		roomDTO.setRoomId(Long.parseLong(rowMap.get("roomId")));//map에서의 키
		return roomDTO;
	}
}
