package com.arezip.weconnect.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.arezip.weconnect.model.dto.RoomDTO;

@Mapper
public interface RoomMapper {
	List<RoomDTO> findRoomNo();
}
