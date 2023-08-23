package com.arezip.weconnect.controller.profile;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.View;

import com.arezip.weconnect.model.dto.ProfileImageDTO;
import com.arezip.weconnect.service.ProfileService;
import com.cleopatra.protocol.data.DataRequest;
import com.cleopatra.spring.JSONDataView;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/weconnect/member/profile")
@RequiredArgsConstructor
@Slf4j
public class ProfileController {
	private final ProfileService profileService;

	@GetMapping
	public View findImgPath(HttpServletRequest request, DataRequest dataRequest) {
		HttpSession session = request.getSession();
		Long memberId = (Long) session.getAttribute("memberId");
		List<ProfileImageDTO> img = profileService.findImgPath(memberId);
		log.info("img경로{}",img);
		dataRequest.setResponse("img", img);
		return new JSONDataView();
	}
}  
