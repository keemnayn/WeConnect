package com.arezip.weconnect.model.vo;

import java.util.Date;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

@Getter
@ToString
@RequiredArgsConstructor
public class AlertVO {
	private final long alertId;
	private final Date alertDate;
	private final String alertContent;
	private final String alertCheck;
	private final MemberVO memberVO;
}
