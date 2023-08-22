package com.arezip.weconnect.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.arezip.weconnect.model.dto.FreeBoardCommentDTO;
import com.arezip.weconnect.model.dto.FreeBoardDTO;
import com.arezip.weconnect.model.dto.NoticeDTO;
import com.arezip.weconnect.model.vo.FreeBoardVO;

@Mapper
public interface FreeBoardMapper {
	//자유 게시판 전체 조회
	List<FreeBoardDTO> getFreeBoardList();
	//자유 게시판 글 등록
	int insertFreeBoard(FreeBoardDTO freeBoardDTO);
	//자유 게시판 상세 페이지 조회
	FreeBoardDTO getFreeBoardDetail(long freeBoardId);
	//자유 게시판 댓글 등록
	int insertFreeBoardComment(FreeBoardCommentDTO freeBoardCommentDTO);
	//자유 게시판 댓글 조회
	List<FreeBoardCommentDTO> getFreeBoardComment(long freeBoardId);
	//자유 게시판 댓글 수정
	int updateFreeBoardComment(FreeBoardCommentDTO freeBoardCommentDTO);
	//자유 게시판 댓글 삭제
	int deleteFreeBoardComment(FreeBoardCommentDTO freeBoardCommentDTO);
}
 