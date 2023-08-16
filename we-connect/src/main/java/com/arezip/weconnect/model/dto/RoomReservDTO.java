package com.arezip.weconnect.model.dto;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RoomReservDTO {
	private long roomReservId;
	private Date roomReservStartDay;
	private Date roomReservEndDay;
	private Date roomReservStartTime;
	private Date roomReservEndTime;
	private MemberDTO memberVO;
	private RoomDTO roomVO;
}
