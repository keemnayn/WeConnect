package com.arezip.weconnect.controller.admin.notice;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
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
@RequestMapping("/weconnect/admin/notices")
@RequiredArgsConstructor
public class AdminNoticeRestController {
	private final NoticeService noticeService;

//	관리자 공지사항 목록
	@GetMapping
	public View getAllNotices(DataRequest dataRequest) {
		log.info("noticeService {}", noticeService.findAllNotices());
		List<NoticeVO> noticeList = noticeService.findAllNotices();
		dataRequest.setResponse("noticeList", noticeList);
		return new JSONDataView();
	}

//	관리자 공지사항 등록
	@PostMapping
	public View postNotice(DataRequest dataRequest) {
		return null;
	}
}