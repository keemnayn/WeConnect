package com.arezip.weconnect.service;

import java.io.File;
import java.util.List;

import com.arezip.weconnect.model.dto.ProfileImageDTO;

public interface ProfileService {
	List<ProfileImageDTO> findImgPath(long memberId);

	void updateProfileImagePath(long memberId, String profileImagePath);
}
