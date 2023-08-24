package com.arezip.weconnect.service.admin;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.arezip.weconnect.mapper.admin.AdminFreeBoardMapper;
import com.arezip.weconnect.model.dto.FreeBoardDTO;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AdminFreeBoardServiceImpl implements AdminFreeBoardService {
	private final AdminFreeBoardMapper adminFreeBoardMapper;

//	전체 조회
	@Override
	public List<FreeBoardDTO> retrieveAllFreeBoards() {
		return adminFreeBoardMapper.getAllFreeBoards();
	}

//	검색
	@Override
	public List<FreeBoardDTO> searchFreeBoardList(Map<String, String> searchParams) {
		return adminFreeBoardMapper.searchFreeBoardList(searchParams);
	}

//	삭제
	@Override
	public int removeFreeBoards(FreeBoardDTO freeBoardDTO) {
		return adminFreeBoardMapper.deleteFreeBoards(freeBoardDTO);
	}
}