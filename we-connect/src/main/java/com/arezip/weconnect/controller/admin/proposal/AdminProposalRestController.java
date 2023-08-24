
package com.arezip.weconnect.controller.admin.proposal;

import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.View;

import com.arezip.weconnect.model.dto.NoticeDTO;
import com.arezip.weconnect.model.dto.ProposalDTO;
import com.arezip.weconnect.service.admin.AdminProposalService;
import com.cleopatra.protocol.data.DataRequest;
import com.cleopatra.protocol.data.ParameterGroup;
import com.cleopatra.protocol.data.ParameterRow;
import com.cleopatra.spring.JSONDataView;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@RequestMapping("/weconnect/admin/proposals")
@RequiredArgsConstructor
public class AdminProposalRestController {
	public final AdminProposalService adminProposalService;

// 건의사항 목록
	@GetMapping
	public View getAllProposals(DataRequest dataRequest) {
		List<ProposalDTO> proposalList = adminProposalService.findAllProposals();
		dataRequest.setResponse("proposalList", proposalList);
		return new JSONDataView();
	}

// 건의사항 처리 상태 변경
	@PutMapping
	public View updateProposalStatus(DataRequest dataRequest, HttpServletRequest request) {
		ParameterGroup parameterGroup = dataRequest.getParameterGroup("proposalList");
		if (parameterGroup != null) {
			Iterator<ParameterRow> iter=parameterGroup.getDeletedRows();
			while (iter.hasNext()) {
				Map<String, String> rowMap=iter.next().toMap();
				ProposalDTO proposalDTO=mapToProposalDTO(rowMap);
				adminProposalService.updateProposalStatus(proposalDTO);
			}
		}
		return new JSONDataView();
	}
	
// Map을 DTO 타입으로 변경하는 메서드
	private ProposalDTO mapToProposalDTO(Map<String, String> rowMap) {
		ProposalDTO proposalDTO=new ProposalDTO();
		proposalDTO.setProposalId(Long.parseLong(rowMap.get("proposalId"))); //map에서의 키
		return proposalDTO;
	}
// 건의사항 삭제
	@DeleteMapping
	public View deleteProposal(DataRequest dataRequest) {
		ParameterGroup parameterGroup=dataRequest.getParameterGroup("proposalList");
		if (parameterGroup != null) {
			Iterator<ParameterRow> iter = parameterGroup.getDeletedRows();
			while (iter.hasNext()) {
				Map<String, String> rowMap = iter.next().toMap();
				ProposalDTO proposalDTO = mapToProposalDTO(rowMap);
				adminProposalService.deleteProposal(proposalDTO);
			}
		}
		return new JSONDataView();
	}
	// 건의사항 검색
	@GetMapping("search")
	public View searchNotices(DataRequest dataRequest) {
		ParameterGroup param = dataRequest.getParameterGroup("searchParam");
		Map<String, String> searchParams = new HashMap<String, String>();
		String searchType = null;
		String searchText = null;
		if (param != null) {
			searchType = param.getValue("searchType");
			searchText = param.getValue("searchText");
		}
		List<ProposalDTO> proposalList = null;
		// searchText가 빈 문자열이거나 null이면 전체 리스트 반환
		if (searchText == null || searchText.trim().isEmpty()) {
			proposalList = adminProposalService.findAllProposals();
		} else {
			if (searchType != null && !"".equals(searchType.trim())) {
				searchParams.put("searchType", searchType);
			}
			searchParams.put("searchText", searchText);
			proposalList = adminProposalService.searchProposal(searchParams);
		}
		dataRequest.setResponse("proposalList", proposalList);
		return new JSONDataView();
	}
}