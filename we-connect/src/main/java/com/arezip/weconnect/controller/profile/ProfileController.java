package com.arezip.weconnect.controller.profile;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.View;

import com.arezip.weconnect.model.dto.ProfileImageDTO;
import com.arezip.weconnect.service.ProfileService;
import com.cleopatra.protocol.data.DataRequest;
import com.cleopatra.protocol.data.ParameterGroup;
import com.cleopatra.protocol.data.UploadFile;
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
		log.info("img경로{}", img);
		dataRequest.setResponse("img", img);
		return new JSONDataView();
	}

	@PutMapping
	public View updateImgPath(HttpServletRequest request, DataRequest dataRequest) throws IOException {
		//세션 아이디 값 가져오기 
		HttpSession session = request.getSession();
		Long memberId = (Long) session.getAttribute("memberId");
		ParameterGroup parameterGroup = dataRequest.getParameterGroup("profileImage");
		String profileImagePath = parameterGroup.getValue("profileImagePath");
		//업로드 된 파일 가져오기 현재 널값 가져옴  
		//Map<String, UploadFile[]> uploadFiles = dataRequest.getUploadFiles();
		//UploadFile[] uploadFile = uploadFiles.get("profileImagePath");
		//File imageFile = uploadFile[0].getFile();
		//String saveName =  uploadFile[0].getFileName();
		String uuid = UUID.randomUUID().toString();
		//FileCopyUtils.copy(imageFile, new File(Path + uuid + "_" + saveName));
		profileService.updateProfileImagePath(memberId, profileImagePath);
		return new JSONDataView();
	}

}
