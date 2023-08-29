package com.arezip.weconnect.controller.profile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Value;
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
	@Value("${upload.path}")
	private String uploadPath; // 여기에 /we-connect/clx-src/img/header/ 값이 주입됩니다.

	@GetMapping
	public View findImgPath(HttpServletRequest request, DataRequest dataRequest) {
		HttpSession session = request.getSession();
		Long memberId = (Long) session.getAttribute("memberId");
		List<ProfileImageDTO> img = profileService.findImgPath(memberId);
		log.info("img경로{}", img);
		dataRequest.setResponse("img", img);
		return new JSONDataView();
	}

	@PutMapping()
	public View updateImgPath(HttpServletRequest request, DataRequest dataRequest) throws IOException {
		//세션 아이디 값 가져오기 
		HttpSession session = request.getSession();
		Long memberId = (Long) session.getAttribute("memberId");
		//업로드 된 파일 가져오기 
		Map<String,UploadFile[]>uploadFiles = dataRequest.getUploadFiles();
		ParameterGroup parameterGroup = dataRequest.getParameterGroup("profileImage");
		UploadFile[] uploadFile = uploadFiles.get("profileImagePath");
		File orgName = uploadFile[0].getFile();
		log.info("파일:{}", orgName);
		String saveName = uploadFile[0].getFileName();
		log.info("파일 이름:{}", saveName);
		String uuid  = UUID.randomUUID().toString();
		String profileImagePath = uploadPath + parameterGroup.getValue("profileImagePath");
		log.info("멤버 아이디:{}", memberId);
		profileService.updateProfileImagePath(memberId, profileImagePath);

		return new JSONDataView();
	}

}
