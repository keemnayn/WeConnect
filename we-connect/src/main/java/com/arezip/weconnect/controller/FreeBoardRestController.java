package com.arezip.weconnect.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.View;

import com.arezip.weconnect.model.vo.FreeBoardVO;
import com.arezip.weconnect.service.FreeBoardService;
import com.cleopatra.protocol.data.DataRequest;
import com.cleopatra.spring.JSONDataView;
import com.cleopatra.spring.UIView;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@RequestMapping("/weconnect")
@RequiredArgsConstructor
public class FreeBoardRestController {
	 private final FreeBoardService freeBoardService;
	 
	 @GetMapping("/board.do")//submission action 도메인과 같음	 
	 public View freeBoardListPage(DataRequest dataRequest) {
		 List<FreeBoardVO> boardList = freeBoardService.getFreeBoardList();
		 dataRequest.setResponse("boardList", boardList);//데이터셋 이름과 같음
		 return new JSONDataView();
	 }
	 
}
