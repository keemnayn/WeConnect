package com.arezip.weconnect.controller.admin.notice;

import java.util.HashMap;
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

import com.arezip.weconnect.model.dto.NoticeDTO;
import com.arezip.weconnect.service.admin.AdminNoticeService;
import com.cleopatra.protocol.data.DataRequest;
import com.cleopatra.protocol.data.ParameterGroup;
import com.cleopatra.protocol.data.ParameterRow;
import com.cleopatra.spring.JSONDataView;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@RequestMapping("/weconnect/admin/notices")
@RequiredArgsConstructor
public class AdminNoticeRestController {
	private final AdminNoticeService adminNoticeService;

//	공지사항 목록
	@GetMapping
	public View getAllNotices(DataRequest dataRequest) {
		List<NoticeDTO> noticeList = adminNoticeService.findAllNotices();
		dataRequest.setResponse("noticeList", noticeList);
		return new JSONDataView();
	}

	// 공지사항 등록
	@PostMapping
	public View postNotice(DataRequest dataRequest) {
		ParameterGroup param = dataRequest.getParameterGroup("noticeCreateParam");
		if (param != null) {
			String noticeTitle = param.getValue("noticeTitle");
			String noticeContent = param.getValue("noticeContent");
			String noticeCategory = param.getValue("noticeCategory");
			log.info("noticeTitle {}", noticeTitle);
			log.info("noticeContent {}", noticeContent);
			log.info("noticeCategory {}", noticeCategory);
			long memberId = 1;
			NoticeDTO noticeDTO = new NoticeDTO();
			noticeDTO.setNoticeTitle(noticeTitle);
			noticeDTO.setNoticeContent(noticeContent);
			noticeDTO.setNoticeCategory(noticeCategory);
			noticeDTO.setMemberId(memberId);
			adminNoticeService.addNotice(noticeDTO);
		}
		return new JSONDataView();
	}

	// 공지사항 수정
	@PutMapping
	public View updateNotice(DataRequest dataRequest) {
		ParameterGroup param = dataRequest.getParameterGroup("noticeUpdateParam");
		if (param != null) {
			Long noticeId = Long.parseLong(param.getValue("noticeId"));
			String noticeTitle = param.getValue("noticeTitle");
			String noticeContent = param.getValue("noticeContent");
			String noticeCategory = param.getValue("noticeCategory");
			log.info("noticeId {}", noticeId);
			log.info("noticeTitle {}", noticeTitle);
			log.info("noticeContent {}", noticeContent);
			log.info("noticeCategory {}", noticeCategory);
			long memberId = 1;
			NoticeDTO noticeDTO = new NoticeDTO();
			noticeDTO.setNoticeId(noticeId);
			noticeDTO.setNoticeTitle(noticeTitle);
			noticeDTO.setNoticeContent(noticeContent);
			noticeDTO.setNoticeCategory(noticeCategory);
			noticeDTO.setMemberId(memberId);
			adminNoticeService.updateNotice(noticeDTO);
		}
		return new JSONDataView();
	}

//	공지사항 삭제
	@DeleteMapping
	public View deleteNotice(DataRequest dataRequest) {
		ParameterGroup parameterGroup = dataRequest.getParameterGroup("noticeList");
		if (parameterGroup != null) {
			Iterator<ParameterRow> iter = parameterGroup.getDeletedRows();
			while (iter.hasNext()) {
				Map<String, String> rowMap = iter.next().toMap();
				NoticeDTO noticeDTO = mapToNoticeDTO(rowMap);
				adminNoticeService.deleteNotice(noticeDTO);
			}
		}
		return new JSONDataView();
	}

//	Map을 DTO 타입으로 변경하는 메서드
	private NoticeDTO mapToNoticeDTO(Map<String, String> rowMap) {
		NoticeDTO noticeDTO = new NoticeDTO();
		noticeDTO.setNoticeId(Long.parseLong(rowMap.get("noticeId"))); // 여기서 'noticeId'는 map에서의 키를 가정한 것입니다.
		return noticeDTO;
	}

	// 공지사항 검색
	@GetMapping("search")
	public View searchNotices(DataRequest dataRequest) {
		ParameterGroup param = dataRequest.getParameterGroup("searchParam");
		Map<String, String> searchParams = new HashMap<String, String>();
		String searchType = null;
		String searchText = null;
		if (param != null) {
			searchType = param.getValue("searchType");
			searchText = param.getValue("searchText");
		}
		List<NoticeDTO> noticeList = null;
		// searchText가 빈 문자열이거나 null이면 전체 리스트 반환
		if (searchText == null || searchText.trim().isEmpty()) {
			noticeList = adminNoticeService.findAllNotices();
		} else {
			if (searchType != null && !"".equals(searchType.trim())) {
				searchParams.put("searchType", searchType);
			}
			searchParams.put("searchText", searchText);
			noticeList = adminNoticeService.searchNotice(searchParams);
		}
		dataRequest.setResponse("noticeList", noticeList);
		return new JSONDataView();
	}
}