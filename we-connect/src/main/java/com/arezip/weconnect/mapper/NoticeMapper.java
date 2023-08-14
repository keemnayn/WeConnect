package com.arezip.weconnect.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.arezip.weconnect.model.vo.NoticeVO;

@Mapper
public interface NoticeMapper {
	List<NoticeVO> selectAllNotices();

	int insertNotice(NoticeVO noticeVO);

	int updateNotice(NoticeVO noticeVO);

	int deleteNotice(long noticeId);

	List<NoticeVO> selectNoticesBySearchCriteria(Map<String, String> searchParams);
}
