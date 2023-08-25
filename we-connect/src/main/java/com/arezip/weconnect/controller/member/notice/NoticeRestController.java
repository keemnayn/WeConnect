package com.arezip.weconnect.controller.member.notice;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.View;

import com.arezip.weconnect.model.dto.NoticeDTO;
import com.arezip.weconnect.service.NoticeService;
import com.cleopatra.protocol.data.DataRequest;
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
}