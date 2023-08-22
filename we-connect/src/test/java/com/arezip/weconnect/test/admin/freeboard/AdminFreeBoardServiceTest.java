package com.arezip.weconnect.test.admin.freeboard;

import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.arezip.weconnect.model.dto.FreeBoardDTO;
import com.arezip.weconnect.service.admin.AdminFreeBoardService;

import lombok.extern.slf4j.Slf4j;

@SpringBootTest
@Slf4j
public class AdminFreeBoardServiceTest {
	@Autowired
	AdminFreeBoardService adminFreeBoardService;

//	전체 조회
	@Test
	void retrieveAllFreeBoardsTest() {
		List<FreeBoardDTO> list = adminFreeBoardService.retrieveAllFreeBoards();
		list.forEach(freeBoards -> log.info(freeBoards.toString()));
		assertNotNull(list);
	}

//	검색
	@Test
	void searchFreeBoardListTest() {
		String searchType = "all";
		String searchText = "Title";
		Map<String, String> searchParams = new HashMap<>();
		searchParams.put("searchType", searchType);
		searchParams.put("searchText", searchText);
		List<FreeBoardDTO> list = adminFreeBoardService.searchFreeBoardList(searchParams);
		list.forEach(freeBoards -> log.info(freeBoards.toString()));
		assertNotNull(list);
	}

//	삭제
	@Test
	void deleteFreeBoardsTest() {
		FreeBoardDTO freeBoardDTO = new FreeBoardDTO();
		freeBoardDTO.setFreeBoardId(3);
		int result = adminFreeBoardService.removeFreeBoards(freeBoardDTO);
		assertNotEquals(0, result);
	}
}
