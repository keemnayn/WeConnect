package com.arezip.weconnect.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.arezip.weconnect.model.dto.NoticeDTO;
import com.arezip.weconnect.model.vo.NoticeVO;

@Mapper
public interface NoticeMapper {
	List<NoticeDTO> selectAllNotices();

	int insertNotice(NoticeDTO noticeDTO);

	int updateNotice(NoticeDTO noticeDTO);

	int deleteNotice(long noticeId);

	List<NoticeDTO> selectNoticesBySearchCriteria(Map<String, String> searchParams);
}
