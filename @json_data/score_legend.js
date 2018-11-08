var _data_legend = [
	// {
	// 	"name": "300인 이상 제조업 집중도 (기본지도)",
	// 	"calculation": "300인 이상 제1제조업 종사자수 / 300인 이상 제조업 종사자수 (시·군·자치구 기준, %)",
	// 	"source": "고용노동부, 사업체노동실태현황",
	// 	"max_score": 30,
	// 	"score_array": [0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30],
	// 	"dataValue_array": ["0%", "1%<br>미만", "~2%", "~3%", "~4%", "~5%", "~7.5%", "~10%", "~15%", "~20%", "20%<br>이상"] 
	// },
	{
		"name": "1000인 이상 제조업 집중도",
		"calculation": "1000인 이상 대기업 종사자수 / 전체 종사자수 (시·군·자치구 기준, %)",
		"source": "고용노동부, 사업체노동실태현황",
		"max_score": 10,
		"score_array": [0, 2.5, 5, 7.5, 10],
		"dataValue_array": ["0%", "~5% 미만", "~10%", "~15%", "15% 이상"] 
	},
	{
		"name": "제1제조업 집중도",
		"calculation": "제1제조업 종사자수 / 전체 종사자수 (시·군·자치구 기준, %)",
		"source": "고용노동부, 사업체노동실태현황",
		"max_score": 10,
		"score_array": [0, 2.5, 5, 7.5, 10],
		"dataValue_array": ["30% 미만", "~40%", "~70%", "~100%", "100%"] 
	},
	{
		"name": "제조업 고령화",
		"calculation": "20대 제조업 종사자수 / 전체 제조업 종사자수 (시·군·자치구 기준, %)",
		"source": "한국고용정보원, 고용보험 비정형통계 피보험자현황",
		"max_score": 10,
		// "score_array": [0, 2.5, 5, 7.5, 10],
		// "dataValue_array": ["20%<br>이상", "15% ~", "10% ~", "5% ~", "5%<br>미만"] 		
		"score_array": [10, 7.5, 5, 2.5, 0],
		"dataValue_array": ["5% 미만", "~10%", "~15%", "~20%", "20% 이상"] 
	},
	{
		"name": "일자리 창출 위험도",
		"calculation": "전년도 대비 일자리 창출량 / 전체 일자리수 (시·군·자치구 기준, %)",
		"source": "통계청, 전국사업체조사 사업체패널자료(통계청 원격프로그램 활용)",
		"max_score": 10,
		// "score_array": [0, 2.5, 5, 7.5, 10],
		// "dataValue_array": ["20%<br>이상", "15% ~", "12.5% ~", "10% ~", "10%<br>미만"] 	
		"score_array": [10, 7.5, 5, 2.5, 0],
		"dataValue_array": ["10% 미만", "~12.5%", "~15%", "~20%", "20% 이상"] 
	},
	{
		"name": "직장인-주민 괴리도 (2016)",
		"calculation": "거주지 기준 급여 총액 / 근무지 기준 급여 총액 (시·군·자치구 기준, %)",
		"source": "국세청, 국세통계 원천세 시군구별 근로소득 연말정산 신고 현황",
		"max_score": 10,
		// "score_array": [0, 2.5, 5, 7.5, 10],
		// "dataValue_array": ["100%<br>이상", "90% ~", "80% ~", "60% ~", "60%<br>미만"] 	
		"score_array": [10, 7.5, 5, 2.5, 0],
		"dataValue_array": ["60% 미만", "~80%", "~90%", "~100%", "100% 이상"]
	},
	{
		"name": "과학기술혁신 역량 위험도",
		"calculation": "과학기술혁신역량지수 (광역시·도 기준, R-COSTII)",
		"source": "한국과학기술평가원(KISTEP)이 자원, 활동, 네트워크, 환경, 성과 등 5개 부문의 13개 항목, 31개 지표에 따라 <br>지역(광역시·도)별 과학기술혁신역량을 평가한 지수",
		"max_score": 10,
		// "score_array": [0, 2.5, 5, 7.5, 10],
		// "dataValue_array": ["14<br>이상", "10 ~", "8 ~", "7 ~", "5 미만"] 	
		"score_array": [10, 7.5, 5, 2.5, 0],
		"dataValue_array": ["5 미만", "~ 7", "~ 8", "~ 10", "14 이상"]
	},
	{
		"name": "관리자, 전문가 비중 위험도",
		"calculation": "관리자 및 전문가 수 / 전체 취업자 수 (시·군·광역시 기준, %)",
		"source": "통계청, 지역별 고용조사",
		"max_score": 10,
		// "score_array": [0, 2.5, 5, 7.5, 10],
		// "dataValue_array": ["20%<br>이상", "15% ~", "10% ~", "5% ~", "5%<br>미만"] 	
		"score_array": [10, 7.5, 5, 2.5, 0],
		"dataValue_array": ["5% 미만", "~10%", "~15%", "~20%", "20% 이상"]
	},
]