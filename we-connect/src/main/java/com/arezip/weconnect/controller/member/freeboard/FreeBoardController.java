package com.arezip.weconnect.controller.member.freeboard;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

import com.arezip.weconnect.model.dto.FreeBoardDTO;
import com.arezip.weconnect.service.FreeBoardService;
import com.cleopatra.protocol.data.DataRequest;
import com.cleopatra.spring.JSONDataView;
import com.cleopatra.spring.UIView;

import lombok.RequiredArgsConstructor;

@Controller
@RequestMapping("/weconnect/member/boards")
@RequiredArgsConstructor
public class FreeBoardController {
	private final FreeBoardService freeBoardService;
	
	//상세 조회 페이지 열기
	@GetMapping("/{freeBoardId}")
	public View boardDetail() {
		return new UIView("weconnect/user/FreeBoardDetail.clx");
	}
	
//	//자유게시판 상세 조회
//	@GetMapping
//	public View getBoardPostDetail(DataRequest dataRequest, long freeBoardId) {
//		FreeBoardDTO freeBoardDTO = freeBoardService.getFreeBoardDetail(freeBoardId);
//		
//		return new JSONDataView();
//	}
//	
}
