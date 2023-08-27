package com.arezip.weconnect.service;



import java.util.List;

import org.springframework.stereotype.Service;

import com.arezip.weconnect.mapper.ProfileMapper;
import com.arezip.weconnect.model.dto.ProfileImageDTO;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
@RequiredArgsConstructor
public class ProfileServiceImpl implements ProfileService {
	private final ProfileMapper profileMapper;
	

	@Override
	public List<ProfileImageDTO>  findImgPath(long memberId) {
		return profileMapper.findImgPath(memberId);
	}
	@Override
	public void updateProfileImagePath(long memberId, String profileImagePath) {
		// TODO Auto-generated method stub
		profileMapper.updateProfileImagePath(memberId,profileImagePath);
	}
}
