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
@RequestMapping("/weconnect/member/room-reserv-list")
@RequiredArgsConstructor
public class RoomReservListRestController {
	private final RoomService roomService;
	private final RoomReservService roomReservService;
	

}
