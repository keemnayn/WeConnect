package com.arezip.weconnect.model.vo;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RoomReservVO {
	private long roomReservId;
	private Date roomReservStartDay;
	private Date roomReservEndDay;
	private Date roomReservStartTime;
	private Date roomReservEndTime;
	private MemberVO memberVO;
	private RoomVO roomVO;
}
