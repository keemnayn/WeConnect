package com.arezip.weconnect.controller.member.roomreserv;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.View;

import com.arezip.weconnect.model.dto.RoomDTO;
import com.arezip.weconnect.model.dto.RoomReservDTO;
import com.arezip.weconnect.service.RoomReservService;
import com.arezip.weconnect.service.RoomService;
import com.cleopatra.protocol.data.DataRequest;
import com.cleopatra.protocol.data.ParameterGroup;
import com.cleopatra.spring.JSONDataView;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@RequestMapping("/weconnect/member/room-reserv")
@RequiredArgsConstructor
public class RoomReservRestController {
	private final RoomService roomService;
	private final RoomReservService roomReservService;
	
	//회의실 예약 리스트
	@GetMapping("/list")
	public View roomReservList(DataRequest dataRequest) {
		List<RoomReservDTO> reservList = roomReservService.findReservList();
		dataRequest.setResponse("reservList", reservList);
		return new JSONDataView();
	}

	
	//회의실 예약
	@PostMapping
	public View reserveRoom(DataRequest dataRequest) {
		ParameterGroup param = dataRequest.getParameterGroup("roomReservParam");

		String roomReservDate = param.getValue("roomReservDate");
		long roomReservStartTime = Long.parseLong(param.getValue("roomReservStartTime"));
		long roomReservEndTime = Long.parseLong(param.getValue("roomReservEndTime"));
		String proposal = param.getValue("proposal");
		long roomId = Long.parseLong(param.getValue("roomId"));
		long memberId = 24;

		log.info("roomReservDate: {}", roomReservDate);
		log.info("roomReservStartTime: {}", roomReservStartTime);
		log.info("roomReservEndTime: {}", roomReservEndTime);
		log.info("proposal: {}", proposal);
		log.info("roomId: {}", roomId);

		RoomReservDTO roomReservDTO = new RoomReservDTO();
		roomReservDTO.setMemberId(memberId);
		roomReservDTO.setRoomReservDate(roomReservDate);
		roomReservDTO.setRoomReservStartTime(roomReservStartTime);
		roomReservDTO.setRoomReservEndTime(roomReservEndTime);
		roomReservDTO.setProposal(proposal);
		roomReservDTO.setRoomId(roomId);

		roomReservService.insertRoomReserv(roomReservDTO);

		return new JSONDataView(); 
	}

	// 콤보박스에 회의실 정보 가져오기
	@GetMapping
	public View ListRoomName(DataRequest dataRequest) {
		List<RoomDTO> roomList = roomService.findRoomNo();
		dataRequest.setResponse("roomInfo", roomList);
		log.info("회의실 리스트{}:", roomService.findRoomNo());
		return new JSONDataView();
	}
	
	//이미 예약되어 있는 회의실 정보
	@GetMapping("/bookedRoomList")
	public View BookedRoom(DataRequest dataRequest) {
		List<RoomReservDTO> bookedList = roomReservService.findBookedRoom();
		dataRequest.setResponse("bookedList", bookedList);
		log.info("예약된 리스트{}", roomReservService.findBookedRoom());
		return new JSONDataView();
	}
}
