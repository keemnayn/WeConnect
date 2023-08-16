package com.arezip.weconnect.model.vo;

import java.util.Date;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

@Getter
@ToString
@RequiredArgsConstructor
public class RoomReservVO {
	private final long roomReservId;
	private final Date roomReservStartDay;
	private final Date roomReservEndDay;
	private final Date roomReservStartTime;
	private final Date roomReservEndTime;
	private final MemberVO memberVO;
	private final RoomVO roomVO;
}
