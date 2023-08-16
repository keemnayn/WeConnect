package com.arezip.weconnect.controller.member.freeboard;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.View;

import com.arezip.weconnect.model.dto.FreeBoardAndMemberDTO;
import com.arezip.weconnect.service.FreeBoardService;
import com.cleopatra.protocol.data.DataRequest;
import com.cleopatra.spring.JSONDataView;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@RequestMapping("/weconnect/member/boards")
@RequiredArgsConstructor
public class FreeBoardRestController {
	private final FreeBoardService freeBoardService;

	// list 보이기
//	 @GetMapping("board.do")//submission action 도메인과 같음	 
//	 public View freeBoardListPage(DataRequest dataRequest) {
//		 List<FreeBoardVO> boardList = freeBoardService.getFreeBoardList();
//		 System.out.println(boardList);
//		 dataRequest.setResponse("boardList", boardList);//데이터셋 이름과 같음
//		 return new JSONDataView();
//	 }
	@GetMapping // submission action 도메인과 같음
	public View freeBoardListPage(DataRequest dataRequest) {
		List<FreeBoardAndMemberDTO> boardList = freeBoardService.getFreeBoardList();
		System.out.println(boardList);
		dataRequest.setResponse("boardList", boardList);// 데이터셋 이름과 같음
		return new JSONDataView();
	}

}