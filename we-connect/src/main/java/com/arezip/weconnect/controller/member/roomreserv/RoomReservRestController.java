package com.arezip.weconnect.controller.member.roomreserv;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.View;

import com.cleopatra.protocol.data.DataRequest;
import com.cleopatra.spring.JSONDataView;

import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@RequestMapping("/weconnect/member/room-reserv")
public class RoomReservRestController {
	@PostMapping
	public View insertRoomReserv(DataRequest dataRequest) {
		
		return new JSONDataView();
	}
}
