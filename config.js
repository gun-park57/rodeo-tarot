/* ===== 압구정 로데오 타로 · 사이트 설정 =====
 * 이 파일 하나만 메모장으로 고치면 한국어판과 영어판에 모두 적용돼요.
 * 따옴표 '' 안에만 넣고, 나머지는 건드리지 마세요.
 */
window.RODEO_CONFIG = {
  BETA: true,          // 베타 기간: 유료 버튼을 누르면 결제 의향만 기록하고 무료로 열어줘요. 정식 출시 때 false
  BETA_STAGE: 1,       // 1 = 선착순 100명 베타 테스터: 모든 질문 무제한 무료 (지금) · 2 = 하루 질문 3개 무료 (보관해 둔 다음 단계)
  PRICE: 0,            // 질문 1개 가격(원). 지금은 0 → 버튼에 '0원'. 정식 출시 때 2500으로 바꾸면 '2,500원'
  GA_ID: 'G-664T9VSRNL',           // 구글 애널리틱스 측정 ID (예: 'G-AB12CD34EF'). 비워두면 분석 안 함
  FEEDBACK_URL: 'https://docs.google.com/forms/d/e/1FAIpQLSeke7JhzUft3rK5SCT3veYzojyGL53afq2ksw4ELKUNplOEiw/viewform',    // 의견 받을 주소 (구글 폼이나 카카오톡 오픈채팅 링크). 비워두면 의견 버튼 숨김. 짧은 주소(유튜브 설명란용): https://forms.gle/NXMECnkxukkkQV6d7
  EN_URL: 'en/'        // 영어 사주 페이지 위치 (바꾸지 마세요)
};
