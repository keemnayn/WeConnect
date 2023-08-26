package com.arezip.weconnect.controller.profile;

import java.io.File;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
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
    private String uploadPath;  // 여기에 /we-connect/clx-src/img/header/ 값이 주입됩니다.
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
    public View updateImgPath(HttpServletRequest request, DataRequest dataRequest) {
        HttpSession session = request.getSession();
        System.out.println("데이터"+dataRequest);
        Map<String, UploadFile[]>uploadMap =dataRequest.getUploadFiles();
        Map<String, File[]>files = dataRequest.getFiles();
        System.out.println("파일"+files);
        UploadFile[] upload = uploadMap.get("profileImagePath");
        System.out.println("업로드:"+upload); 
        System.out.println("테스트"+uploadMap);
        ParameterGroup parameterGroup = dataRequest.getParameterGroup("profileImage");
        String profileImagePath = uploadPath + parameterGroup.getValue("profileImagePath");
        Long memberId = (Long) session.getAttribute("memberId");
        log.info("멤버 아이디:{}",memberId);
        profileService.updateProfileImagePath(memberId, profileImagePath);
        return new JSONDataView();
    }
}
