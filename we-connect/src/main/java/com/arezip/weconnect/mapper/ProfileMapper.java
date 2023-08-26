package com.arezip.weconnect.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.arezip.weconnect.model.dto.ProfileImageDTO;

@Mapper
public interface ProfileMapper {
	List<ProfileImageDTO>  findImgPath(long memberId);
	int insertProfileImage(ProfileImageDTO profileImageDTO);
	void updateProfileImagePath(long memberId, String profileImagePath);
}

