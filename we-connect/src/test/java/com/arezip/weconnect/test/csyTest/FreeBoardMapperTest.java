package com.arezip.weconnect.test.freeboard;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.arezip.weconnect.mapper.FreeBoardMapper;
import com.arezip.weconnect.model.dto.FreeBoardDTO;

import lombok.extern.slf4j.Slf4j;

@SpringBootTest
@Slf4j
public class FreeBoardMapperTest {
	@Autowired
	FreeBoardMapper freeBoardMapper;

	@Test
	void getListTest() {
		List<FreeBoardDTO> list = freeBoardMapper.getFreeBoardList();
		list.forEach(freeBoard -> log.info(freeBoard.toString()));
		assertNotNull(list);
	}
	@Test
	void getBoardDetail(long freeBoardId) {
		FreeBoardDTO boardDetail = freeBoardMapper.getFreeBoardDetail(freeBoardId);
		
		
	}
}
