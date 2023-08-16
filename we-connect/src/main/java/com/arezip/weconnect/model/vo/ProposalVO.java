package com.arezip.weconnect.model.vo;

import java.util.Date;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

@Getter
@ToString
@RequiredArgsConstructor
public class ProposalVO {
	private final long proposalId;
	private final String proposalTitle;
	private final String proposalContent;
	private final Date proposalCreate;
	private final String proposalStatus;
	private final MemberVO memberVO;
}
