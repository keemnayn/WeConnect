package com.arezip.weconnect.controller.admin.freeboard;

import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.View;

import com.arezip.weconnect.model.dto.FreeBoardDTO;
import com.arezip.weconnect.service.admin.AdminFreeBoardService;
import com.cleopatra.protocol.data.DataRequest;
import com.cleopatra.protocol.data.ParameterGroup;
import com.cleopatra.protocol.data.ParameterRow;
import com.cleopatra.spring.JSONDataView;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("weconnect/admin/free-boards")
@RequiredArgsConstructor
//@Slf4j
public class AdminFreeBoardRestController {
	private final AdminFreeBoardService adminFreeBoardService;

//	전체 조회
	@GetMapping
	public View listAllFreeBoards(DataRequest dataRequest) {
		List<FreeBoardDTO> freeBoardList = adminFreeBoardService.retrieveAllFreeBoards();
		dataRequest.setResponse("freeBoardList", freeBoardList);
		return new JSONDataView();
	}

//	검색
	@GetMapping("search")
	public View searchFreeBoardList(DataRequest dataRequest) {
		ParameterGroup param = dataRequest.getParameterGroup("searchParam");
		Map<String, String> searchParams = new HashMap<String, String>();
		String searchType = null;
		String searchText = null;
		if (param != null) {
			searchType = param.getValue("searchType");
			searchText = param.getValue("searchText");
		}
		List<FreeBoardDTO> freeBoardList = null;
		// searchText가 빈 문자열이거나 null이면 전체 리스트 반환
		if (searchText == null || searchText.trim().isEmpty()) {
			freeBoardList = adminFreeBoardService.retrieveAllFreeBoards();
		} else {
			if (searchType != null && !"".equals(searchType.trim())) {
				searchParams.put("searchType", searchType);
			}
			searchParams.put("searchText", searchText);
			freeBoardList = adminFreeBoardService.searchFreeBoardList(searchParams);
		}
		dataRequest.setResponse("freeBoardList", freeBoardList);
		return new JSONDataView();
	}

//	삭제
	@DeleteMapping
	public View deleteNotice(DataRequest dataRequest) {
		ParameterGroup parameterGroup = dataRequest.getParameterGroup("freeBoardList");
		if (parameterGroup != null) {
			Iterator<ParameterRow> iter = parameterGroup.getDeletedRows();
			while (iter.hasNext()) {
				Map<String, String> rowMap = iter.next().toMap();
				FreeBoardDTO freeBoardDTO = mapToNoticeDTO(rowMap);
				adminFreeBoardService.removeFreeBoards(freeBoardDTO);
			}
		}
		return new JSONDataView();
	}

//	Map을 DTO 타입으로 변경하는 메서드
	private FreeBoardDTO mapToNoticeDTO(Map<String, String> rowMap) {
		FreeBoardDTO freeBoardDTO = new FreeBoardDTO();
		freeBoardDTO.setFreeBoardId(Long.parseLong(rowMap.get("freeBoardId"))); // map에서의 키
		return freeBoardDTO;
	}
}