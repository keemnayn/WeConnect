package com.arezip.weconnect.controller.member.freeboard;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

import com.arezip.weconnect.model.dto.FreeBoardDTO;
import com.arezip.weconnect.service.FreeBoardService;
import com.cleopatra.protocol.data.DataRequest;
import com.cleopatra.protocol.data.ParameterGroup;
import com.cleopatra.spring.JSONDataView;
import com.cleopatra.spring.UIView;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@Controller
@RequestMapping("/weconnect/member/boards")
@RequiredArgsConstructor
public class FreeBoardController {
	private final FreeBoardService freeBoardService;

//	// 자유게시판 상세 조회
//	@GetMapping("detail")
//	public View boardDetail(DataRequest dataRequest) {
//		System.out.println("==============boardDetail===============");
//		ParameterGroup param = dataRequest.getParameterGroup("boardParam");
//		System.out.println("param->" + param.toString());
//		Long freeBoardId = Long.parseLong(param.getValue("freeBoardId"));
//		System.out.println("freeBoardId -> " + freeBoardId);
//		FreeBoardDTO freeBoardDetail = freeBoardService.getFreeBoardDetail(freeBoardId);
//		Map<String, Object> initParam = new HashMap<>();
//		initParam.put("url", "boardDetail");
//		initParam.put("freeBoardDetail", freeBoardDetail);
//		return new JSONDataView();
//	}
//	// 자유게시판 상세 조회
//	@GetMapping("detail")
//	public View boardDetail(DataRequest dataRequest) {
//		System.out.println("==============boardDetail===============");
//		ParameterGroup param = dataRequest.getParameterGroup("boardParam");
//		System.out.println("param->" + param.toString());
//		Long freeBoardId = Long.parseLong(param.getValue("freeBoardId"));
//		System.out.println("freeBoardId -> " + freeBoardId);
//		FreeBoardDTO freeBoardDetail = freeBoardService.getFreeBoardDetail(freeBoardId);
//		Map<String, Object> initParam = new HashMap<String, Object>();
//		initParam.put("freeBoardDetail", freeBoardDetail);
//		return new UIView("weconnect/member/FreeBoardDetail.clx", initParam);
//	}
//	@RequestMapping("/weconnect/member/boards/detail")
//	public View boardDetail(HttpServletRequest request, HttpServletResponse response, DataRequest dataRequest) {
//		System.out.println("==============boardDetail===============");
//		ParameterGroup param = dataRequest.getParameterGroup("boardParam");
//		System.out.println("param->" + param.toString());
//		long freeBoardId = Long.parseLong(param.getValue("freeBoardId"));
//		System.out.println("freeBoardId -> " + freeBoardId);
//		FreeBoardDTO freeBoardDetail = freeBoardService.getFreeBoardDetail(freeBoardId);
//		Map<String, Object> initParam = new HashMap<String, Object>();
//		initParam.put("freeBoardDetail", freeBoardDetail);
//		return new UIView("weconnect/member/FreeBoardDetail.clx", initParam);
//	}

} 
