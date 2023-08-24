package com.arezip.weconnect.controller.admin.leaveRequest;

import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.View;

import com.arezip.weconnect.model.dto.LeaveRequestDTO;
import com.arezip.weconnect.service.admin.AdminLeaveRequestService;
import com.cleopatra.protocol.data.DataRequest;
import com.cleopatra.protocol.data.ParameterGroup;
import com.cleopatra.protocol.data.ParameterRow;
import com.cleopatra.spring.JSONDataView;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/weconnect/admin/leave-request")
@Slf4j
@RequiredArgsConstructor
public class leaveRequestRestControlller {
	private final AdminLeaveRequestService adminLeaveRequestService;

//	조회
	@GetMapping
	public View fetchLeaveRequests(DataRequest dataRequest) {
		List<LeaveRequestDTO> leaveRequestList = adminLeaveRequestService.getAllLeaveRequests();

		// 리스트를 반복하면서 formattedLeaveCount 값을 설정
		for (LeaveRequestDTO dto : leaveRequestList) {
			dto.setFormattedLeaveCount(dto.getFormattedLeaveCount());
		}

		dataRequest.setResponse("leaveRequestList", leaveRequestList);
		return new JSONDataView();
	}

//	승인
	@PutMapping
	public View approveAndDecrementLeaveRequest(DataRequest dataRequest) {
		ParameterGroup parameterGroup = dataRequest.getParameterGroup("leaveRequestList");
		if (parameterGroup != null) {
			Iterator<ParameterRow> iter = parameterGroup.getDeletedRows();
			while (iter.hasNext()) {
				Map<String, String> rowMap = iter.next().toMap();
				LeaveRequestDTO leaveRequestDTO = mapToLeaveRequestDTO(rowMap);
				// 승인 대기 상태인지 확인
				if (!"승인 대기".equals(leaveRequestDTO.getLeaveRequestStatus())) {
					Map<String, Object> message = new HashMap<>();
					message.put("error", "승인 대기 상태인 연차만 승인 할 수 있습니다");
					dataRequest.setMetadata(false, message);
					return new JSONDataView();
				}
				adminLeaveRequestService.approveAndDecrementLeaveRequest(leaveRequestDTO);
			}
		}
		return new JSONDataView();
	}

	// Map을 DTO 타입으로 변경하는 메서드
	private LeaveRequestDTO mapToLeaveRequestDTO(Map<String, String> rowMap) {
		LeaveRequestDTO leaveRequestDTO = new LeaveRequestDTO();
		leaveRequestDTO.setLeaveRequestId(Long.parseLong(rowMap.get("leaveRequestId"))); // map에서의 키
		leaveRequestDTO.setMemberId(Long.parseLong(rowMap.get("memberId")));
		leaveRequestDTO.setLeaveRequestStart(rowMap.get("leaveRequestStart"));
		leaveRequestDTO.setLeaveRequestEnd(rowMap.get("leaveRequestEnd"));
		leaveRequestDTO.setLeaveRequestStatus(rowMap.get("leaveRequestStatus"));
		leaveRequestDTO.setLeaveRequestType(rowMap.get("leaveRequestType"));
		return leaveRequestDTO;
	}

//	거절
	@PostMapping
	public View handleLeaveRequestRejection(DataRequest dataRequest) {
		ParameterGroup parameterGroup = dataRequest.getParameterGroup("leaveRequestList");
		if (parameterGroup != null) {
			Iterator<ParameterRow> iter = parameterGroup.getDeletedRows();
			while (iter.hasNext()) {
				Map<String, String> rowMap = iter.next().toMap();
				LeaveRequestDTO leaveRequestDTO = mapToLeaveRequestDTO(rowMap);
				long leaveRequestId = leaveRequestDTO.getLeaveRequestId();
				// 승인 대기 상태인지 확인
				if (!"승인 대기".equals(leaveRequestDTO.getLeaveRequestStatus())) {
					Map<String, Object> message = new HashMap<>();
					message.put("error", "승인 대기 상태인 연차만 거절 할 수 있습니다");
					dataRequest.setMetadata(false, message);
					return new JSONDataView();
				}
				adminLeaveRequestService.rejectLeaveRequest(leaveRequestId);
			}
		}
		return new JSONDataView();
	}

//	검색
	@GetMapping("search")
	public View searchAttendance(DataRequest dataRequest) {
		ParameterGroup param = dataRequest.getParameterGroup("searchParam");
		Map<String, String> searchParams = new HashMap<String, String>();
		String searchType = null;
		String searchText = null;
		if (param != null) {
			searchType = param.getValue("searchType");
			searchText = param.getValue("searchText");
		}
		List<LeaveRequestDTO> leaveRequestList = null;
		// searchText가 빈 문자열이거나 null이면 전체 리스트 반환
		if (searchText == null || searchText.trim().isEmpty()) {
			leaveRequestList = adminLeaveRequestService.getAllLeaveRequests();
		} else {
			if (searchType != null && !"".equals(searchType.trim())) {
				searchParams.put("searchType", searchType);
			}
			searchParams.put("searchText", searchText);
			leaveRequestList = adminLeaveRequestService.searchLeaveRequestByCriteria(searchParams);
		}
		dataRequest.setResponse("leaveRequestList", leaveRequestList);
		return new JSONDataView();
	}
}