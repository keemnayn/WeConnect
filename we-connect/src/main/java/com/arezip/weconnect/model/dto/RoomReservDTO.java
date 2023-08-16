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
	private String roomReservStartTime;
	private String roomReservEndTime;
	private String memberId;
	private long roomId;
}
