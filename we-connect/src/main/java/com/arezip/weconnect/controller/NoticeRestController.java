package com.arezip.weconnect.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.View;

import com.arezip.weconnect.model.vo.NoticeVO;
import com.arezip.weconnect.service.NoticeService;
import com.cleopatra.protocol.data.DataRequest;
import com.cleopatra.spring.JSONDataView;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@RequestMapping("/weconnect")
@RequiredArgsConstructor
public class NoticeRestController {
	private final NoticeService noticeService;

	@GetMapping("/notices.do")
	public View getAllNotices(DataRequest dataRequest) {
		log.info("noticeService {}", noticeService.findAllNotices());
		System.out.println("================" + noticeService.findAllNotices());
		List<NoticeVO> noticeList = noticeService.findAllNotices();
		dataRequest.setResponse("noticeList", noticeList);
		return new JSONDataView();
	}
}