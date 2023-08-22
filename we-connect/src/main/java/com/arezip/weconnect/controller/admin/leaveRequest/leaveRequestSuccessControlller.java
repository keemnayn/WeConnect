package com.arezip.weconnect.controller.admin.leaveRequest;

import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.View;

import com.arezip.weconnect.service.LeaveRequestService;
import com.cleopatra.protocol.data.DataRequest;
import com.cleopatra.spring.JSONDataView;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

// 관리자가 승인 버튼 누르면 기존값이 => 승인 으로 변경하게 만드는 컨트롤러
@RestController
@RequestMapping("/weconnect/admin/leaveRequest")
@Slf4j
@RequiredArgsConstructor
public class leaveRequestSuccessControlller {
	private final LeaveRequestService leRequestService;
	
	@PutMapping
	public  View leaveRequestButton(DataRequest dataRequest) {
		
		return new JSONDataView();
	}
	
}
