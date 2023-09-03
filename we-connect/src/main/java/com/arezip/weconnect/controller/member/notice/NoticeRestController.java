package com.arezip.weconnect.controller.member.notice;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.View;

import com.arezip.weconnect.model.dto.NoticeDTO;
import com.arezip.weconnect.service.NoticeService;
import com.cleopatra.protocol.data.DataRequest;
import com.cleopatra.protocol.data.ParameterGroup;
import com.cleopatra.spring.JSONDataView;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@RequestMapping("/weconnect/member/notice")
@RequiredArgsConstructor
public class NoticeRestController {
	private final NoticeService noticeService;
	//공지사항 목록
	@GetMapping
	public View getNoticeList(DataRequest dataRequest) {
		List<NoticeDTO> noticeList = noticeService.getNoticeList();
		dataRequest.setResponse("noticeList", noticeList);
		return new JSONDataView();
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
			noticeList = noticeService.getNoticeList();
		} else {
			if (searchType != null && !"".equals(searchType.trim())) {
				searchParams.put("searchType", searchType);
			}
			searchParams.put("searchText", searchText);
			noticeList = noticeService.searchNotice(searchParams);
		}
		dataRequest.setResponse("noticeList", noticeList);
		return new JSONDataView();
	}
}