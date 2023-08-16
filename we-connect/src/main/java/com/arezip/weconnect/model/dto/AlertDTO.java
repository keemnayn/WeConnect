package com.arezip.weconnect.model.dto;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AlertDTO {
	private long alertId;
	private Date alertDate;
	private String alertContent;
	private String alertCheck;
	private MemberDTO memberVO;
}
