package com.arezip.weconnect.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RoomReservDTO {
	private long roomReservId;
	private String roomReservDate;
	private long roomReservStartTime;
	private long roomReservEndTime;
	private String proposal;
	private long memberId;
	private String memberName;
	private String roomName;
	private long roomId;
}