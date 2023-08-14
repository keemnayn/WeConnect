package com.arezip.weconnect.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.arezip.weconnect.model.vo.TeamPostVO;

@Mapper
public interface TeamPostMapper {

	static List<TeamPostVO> getTeamPostList() {
		return null;
	}

}
