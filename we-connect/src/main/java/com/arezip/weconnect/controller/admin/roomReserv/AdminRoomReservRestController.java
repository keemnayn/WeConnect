package com.arezip.weconnect.controller.admin.roomReserv;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.View;

import com.arezip.weconnect.model.dto.RoomReservDTO;
import com.arezip.weconnect.service.admin.AdminRoomService;
import com.cleopatra.protocol.data.DataRequest;
import com.cleopatra.spring.JSONDataView;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("weconnect/admin/room-reserv")
@RequiredArgsConstructor
public class AdminRoomReservRestController {
	private final AdminRoomService adminRoomService;
	
	//회의실 예약 조회
	@GetMapping
	public View getRoomReservList(DataRequest dataRequest) {
		List<RoomReservDTO> roomReservList = adminRoomService.getRoomReservList();
		dataRequest.setResponse("reservList", roomReservList);
		return new JSONDataView();
	}
}
