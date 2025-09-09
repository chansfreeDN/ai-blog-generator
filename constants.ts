
import type { ColorTheme } from './types';

export const COLOR_THEMES: ColorTheme[] = [
    {
      id: 1,
      name: '블루-그레이',
      description: '차분하고 전문적인 느낌',
      colors: {
        primary: '#4285F4', background: '#FFFFFF', accent: '#E8F0FE', text: '#3C4043', h2: '#1E88E5',
        metaBoxBg: '#F1F3F4', tipBoxBg: '#E8F0FE', tipBoxBorder: '#4285F4', warnBoxBg: '#FCE8E6', warnBoxBorder: '#D93025',
        tableHeaderBg: '#F1F3F4', tableBorder: '#DADCE0', tableEvenRowBg: '#F8F9FA', exampleBoxBg: '#F1F3F4', exampleBoxHeader: '#3C4043',
        highlightBg: '#D2E3FC', dashedBorder: '#DADCE0', summaryCardContainerBg: '#E8F0FE', summaryCardBorder: '#AECBFA',
        summaryCardHeaderBorder: '#4285F4', summaryCardHeaderIcon: '#1E88E5', summaryCardHeaderH3: '#1E88E5', summaryCardStrong: '#174EA6',
        summaryCardHighlightBg: '#D2E3FC', summaryCardFormulaBg: '#FFFFFF', summaryCardFormulaText: '#174EA6', summaryCardFooterBorder: '#AECBFA'
      }
    },
    {
      id: 2,
      name: '그린-오렌지',
      description: '활기차고 친근한 느낌',
      colors: {
        primary: '#34A853', background: '#FFFFFF', accent: '#FBBC04', text: '#3C4043', h2: '#34A853',
        metaBoxBg: '#E6F4EA', tipBoxBg: '#E6F4EA', tipBoxBorder: '#34A853', warnBoxBg: '#FDF6E2', warnBoxBorder: '#FBBC04',
        tableHeaderBg: '#E6F4EA', tableBorder: '#A8DAB5', tableEvenRowBg: '#F1F8E9', exampleBoxBg: '#E6F4EA', exampleBoxHeader: '#1E8E3E',
        highlightBg: '#FFF8E1', dashedBorder: '#A8DAB5', summaryCardContainerBg: '#E6F4EA', summaryCardBorder: '#81C995',
        summaryCardHeaderBorder: '#1E8E3E', summaryCardHeaderIcon: '#34A853', summaryCardHeaderH3: '#1E8E3E', summaryCardStrong: '#0D652D',
        summaryCardHighlightBg: '#FFF8E1', summaryCardFormulaBg: '#FFFFFF', summaryCardFormulaText: '#0D652D', summaryCardFooterBorder: '#81C995'
      }
    },
    {
      id: 3,
      name: '퍼플-옐로우',
      description: '세련되고 창의적인 느낌',
      colors: {
        primary: '#8E44AD', background: '#FFFFFF', accent: '#F1C40F', text: '#34495E', h2: '#8E44AD',
        metaBoxBg: '#F5EEF8', tipBoxBg: '#F5EEF8', tipBoxBorder: '#8E44AD', warnBoxBg: '#FEF9E7', warnBoxBorder: '#F1C40F',
        tableHeaderBg: '#F5EEF8', tableBorder: '#D2B4DE', tableEvenRowBg: '#FAFAFA', exampleBoxBg: '#F5EEF8', exampleBoxHeader: '#512E5F',
        highlightBg: '#FCF3CF', dashedBorder: '#D2B4DE', summaryCardContainerBg: '#F5EEF8', summaryCardBorder: '#C39BD3',
        summaryCardHeaderBorder: '#6C3483', summaryCardHeaderIcon: '#8E44AD', summaryCardHeaderH3: '#6C3483', summaryCardStrong: '#512E5F',
        summaryCardHighlightBg: '#FCF3CF', summaryCardFormulaBg: '#FFFFFF', summaryCardFormulaText: '#512E5F', summaryCardFooterBorder: '#C39BD3'
      }
    },
    {
      id: 4,
      name: '틸-라이트그레이',
      description: '안정적이고 현대적인 느낌',
      colors: {
        primary: '#009688', background: '#FFFFFF', accent: '#CFD8DC', text: '#37474F', h2: '#00796B',
        metaBoxBg: '#ECEFF1', tipBoxBg: '#E0F2F1', tipBoxBorder: '#009688', warnBoxBg: '#FFEBEE', warnBoxBorder: '#E57373',
        tableHeaderBg: '#ECEFF1', tableBorder: '#B0BEC5', tableEvenRowBg: '#FAFAFA', exampleBoxBg: '#ECEFF1', exampleBoxHeader: '#263238',
        highlightBg: '#E0F2F1', dashedBorder: '#B0BEC5', summaryCardContainerBg: '#E0F2F1', summaryCardBorder: '#B2DFDB',
        summaryCardHeaderBorder: '#00796B', summaryCardHeaderIcon: '#009688', summaryCardHeaderH3: '#00796B', summaryCardStrong: '#004D40',
        summaryCardHighlightBg: '#E0F2F1', summaryCardFormulaBg: '#FFFFFF', summaryCardFormulaText: '#004D40', summaryCardFooterBorder: '#B2DFDB'
      }
    },
    {
      id: 5,
      name: '테라코타-라이트그레이',
      description: '따뜻하고 편안한 느낌',
      colors: {
        primary: '#E57373', background: '#FFFFFF', accent: '#FAFAFA', text: '#4E342E', h2: '#D32F2F',
        metaBoxBg: '#FBE9E7', tipBoxBg: '#FBE9E7', tipBoxBorder: '#E57373', warnBoxBg: '#FFFDE7', warnBoxBorder: '#FFD600',
        tableHeaderBg: '#FBE9E7', tableBorder: '#FFCCBC', tableEvenRowBg: '#FAFAFA', exampleBoxBg: '#FBE9E7', exampleBoxHeader: '#4E342E',
        highlightBg: '#FFCCBC', dashedBorder: '#FFCCBC', summaryCardContainerBg: '#FBE9E7', summaryCardBorder: '#FFAB91',
        summaryCardHeaderBorder: '#D32F2F', summaryCardHeaderIcon: '#E57373', summaryCardHeaderH3: '#D32F2F', summaryCardStrong: '#BF360C',
        summaryCardHighlightBg: '#FFCCBC', summaryCardFormulaBg: '#FFFFFF', summaryCardFormulaText: '#BF360C', summaryCardFooterBorder: '#FFAB91'
      }
    },
    {
      id: 6,
      name: '클래식 블루',
      description: '신뢰할 수 있고 안정적인 느낌',
      colors: {
        primary: '#0D47A1', background: '#FFFFFF', accent: '#E3F2FD', text: '#212121', h2: '#1565C0',
        metaBoxBg: '#F5F5F5', tipBoxBg: '#E3F2FD', tipBoxBorder: '#1976D2', warnBoxBg: '#FCE4EC', warnBoxBorder: '#D81B60',
        tableHeaderBg: '#E3F2FD', tableBorder: '#90CAF9', tableEvenRowBg: '#F8F9FA', exampleBoxBg: '#F5F5F5', exampleBoxHeader: '#0D47A1',
        highlightBg: '#BBDEFB', dashedBorder: '#90CAF9', summaryCardContainerBg: '#E3F2FD', summaryCardBorder: '#64B5F6',
        summaryCardHeaderBorder: '#1565C0', summaryCardHeaderIcon: '#1976D2', summaryCardHeaderH3: '#1565C0', summaryCardStrong: '#0D47A1',
        summaryCardHighlightBg: '#BBDEFB', summaryCardFormulaBg: '#FFFFFF', summaryCardFormulaText: '#0D47A1', summaryCardFooterBorder: '#64B5F6'
      }
    },
    {
      id: 7,
      name: '네이처 그린',
      description: '생기 있고 조화로운 느낌',
      colors: {
        primary: '#4CAF50', background: '#FFFFFF', accent: '#F1F8E9', text: '#333333', h2: '#388E3C',
        metaBoxBg: '#E8F5E9', tipBoxBg: '#E8F5E9', tipBoxBorder: '#4CAF50', warnBoxBg: '#FFF9C4', warnBoxBorder: '#FBC02D',
        tableHeaderBg: '#E8F5E9', tableBorder: '#A5D6A7', tableEvenRowBg: '#F1F8E9', exampleBoxBg: '#E8F5E9', exampleBoxHeader: '#1B5E20',
        highlightBg: '#C8E6C9', dashedBorder: '#A5D6A7', summaryCardContainerBg: '#E8F5E9', summaryCardBorder: '#A5D6A7',
        summaryCardHeaderBorder: '#388E3C', summaryCardHeaderIcon: '#4CAF50', summaryCardHeaderH3: '#388E3C', summaryCardStrong: '#1B5E20',
        summaryCardHighlightBg: '#C8E6C9', summaryCardFormulaBg: '#FFFFFF', summaryCardFormulaText: '#1B5E20', summaryCardFooterBorder: '#A5D6A7'
      }
    },
    {
      id: 8,
      name: '로얄 퍼플',
      description: '우아하고 독창적인 느낌',
      colors: {
        primary: '#673AB7', background: '#FFFFFF', accent: '#EDE7F6', text: '#311B92', h2: '#5E35B1',
        metaBoxBg: '#F3E5F5', tipBoxBg: '#EDE7F6', tipBoxBorder: '#673AB7', warnBoxBg: '#FCE4EC', warnBoxBorder: '#EC407A',
        tableHeaderBg: '#EDE7F6', tableBorder: '#D1C4E9', tableEvenRowBg: '#FAFAFA', exampleBoxBg: '#F3E5F5', exampleBoxHeader: '#311B92',
        highlightBg: '#D1C4E9', dashedBorder: '#D1C4E9', summaryCardContainerBg: '#EDE7F6', summaryCardBorder: '#B39DDB',
        summaryCardHeaderBorder: '#512DA8', summaryCardHeaderIcon: '#673AB7', summaryCardHeaderH3: '#512DA8', summaryCardStrong: '#311B92',
        summaryCardHighlightBg: '#D1C4E9', summaryCardFormulaBg: '#FFFFFF', summaryCardFormulaText: '#311B92', summaryCardFooterBorder: '#B39DDB'
      }
    },
    {
      id: 9,
      name: '퓨처 틸',
      description: '혁신적이고 활기찬 느낌',
      colors: {
        primary: '#00ACC1', background: '#FFFFFF', accent: '#E0F7FA', text: '#004D40', h2: '#00838F',
        metaBoxBg: '#E0F7FA', tipBoxBg: '#E0F7FA', tipBoxBorder: '#00ACC1', warnBoxBg: '#FFF3E0', warnBoxBorder: '#FB8C00',
        tableHeaderBg: '#E0F7FA', tableBorder: '#B2EBF2', tableEvenRowBg: '#FAFAFA', exampleBoxBg: '#E0F7FA', exampleBoxHeader: '#006064',
        highlightBg: '#B2EBF2', dashedBorder: '#B2EBF2', summaryCardContainerBg: '#E0F7FA', summaryCardBorder: '#80DEEA',
        summaryCardHeaderBorder: '#00838F', summaryCardHeaderIcon: '#00ACC1', summaryCardHeaderH3: '#00838F', summaryCardStrong: '#004D40',
        summaryCardHighlightBg: '#B2EBF2', summaryCardFormulaBg: '#FFFFFF', summaryCardFormulaText: '#004D40', summaryCardFooterBorder: '#80DEEA'
      }
    },
    {
      id: 10,
      name: '어스 테라코타',
      description: '온화하고 견고한 느낌',
      colors: {
        primary: '#FF7043', background: '#FFFFFF', accent: '#FBE9E7', text: '#3E2723', h2: '#F4511E',
        metaBoxBg: '#EFEBE9', tipBoxBg: '#FBE9E7', tipBoxBorder: '#FF7043', warnBoxBg: '#FFFDE7', warnBoxBorder: '#FFAB00',
        tableHeaderBg: '#EFEBE9', tableBorder: '#FFCCBC', tableEvenRowBg: '#FAFAFA', exampleBoxBg: '#EFEBE9', exampleBoxHeader: '#3E2723',
        highlightBg: '#FFAB91', dashedBorder: '#FFCCBC', summaryCardContainerBg: '#FBE9E7', summaryCardBorder: '#FFAB91',
        summaryCardHeaderBorder: '#E64A19', summaryCardHeaderIcon: '#FF7043', summaryCardHeaderH3: '#E64A19', summaryCardStrong: '#BF360C',
        summaryCardHighlightBg: '#FFAB91', summaryCardFormulaBg: '#FFFFFF', summaryCardFormulaText: '#BF360C', summaryCardFooterBorder: '#FFAB91'
      }
    }
];

export const PROMPT_GUIDELINES = `
## 전문적이고 시각적인 블로그 포스트 생성 가이드

- 사용자가 제시한 키워드 또는 주제에 대해 아래 지침으로 블로그 기사를 생성합니다.

### 기본 설정
1.  **최종 산출물**:
    * **HTML 본문**: 인라인 스타일이 적용된 HTML 코드를 코드블럭에서 생성합니다. (HEAD, BODY 태그 제외. JSON-LD 스키마는 본문에 포함)
    * **부가 정보**: HTML 본문 생성 완료 후, 별도의 텍스트 형식으로 부가 정보를 생성합니다.
2.  **목표**: 전문적이면서도 가독성이 높은 블로그 포스팅을 생성합니다.
3.  **사용자 컬러 테마 확인**: 기사 생성 전 다음과 같이 사용자에게 지식에 첨부한 컬러 테마 선택지를 제시하고, 선택된 테마에 맞춰 스타일을 적용합니다. (본 가이드는 HTML 구조와 형식에 중점을 두며, 색상 관련 스타일은 테마에 따릅니다.)
4. ** 본문 섹션형식 ** : 본문내 섹션의 형식은 아래 지침을 참고하나 기사내용에 따라 맞춤화 되어야 합니다.
5.  **분량**: 한글 기준 공백 포함 2500~3000자로 합니다.
6.  **대상 독자**: 특정 주제에 관심이 있는 일반 독자층으로 설정합니다.
7.  **최적 활용**: 튜토리얼, 가이드, 설명서, 안내문 등 정보 제공형 콘텐츠에 적합합니다.
8.  **코드블럭 사용**: **본 가이드라인 내의 모든 예시 코드를 포함하여, 응답으로 생성되는 모든 HTML, CSS, JavaScript, JSON 등의 코드는 반드시 코드 블록(\` \` \`)으로 감싸서 출력합니다.**
9.  **결과물 생성 시 주의사항**:
    * 본문 생성 시, 내부적인 처리 과정에서 사용된 인용 태그 등의 메타데이터는 최종 결과물에서 **반드시 제거**하고, 오직 사용자에게 필요한 정보만을 담아 제공합니다.
    * 참고 인용 출처 표시는 최종 결과물에서 제외합니다.
    * HTML 본문 결과물은 **HTML 코드 외의 불필요한 설명**을 포함하지 않도록 합니다.

### 전체 HTML 구조
1.  **전체 래퍼 (Wrapper)**: 모든 HTML 콘텐츠는 다음 \`div\` 태그로 감싸서 일관된 스타일 기반을 마련합니다. **이 래퍼는 \`box-sizing: border-box;\`를 기본으로 포함해야 합니다.**
    \`\`\`html
    <div style="font-family: 'Noto Sans KR', sans-serif; line-height: 1.6; max-width: 800px; margin: 0 auto; font-size: 16px; box-sizing: border-box; color: {{TEXT_COLOR}};">
    </div>
    \`\`\`
2.  **시작 여백**: 콘텐츠 최상단에 미세한 여백을 추가하여 가독성을 높일 수 있습니다.
    \`\`\`html
    <p data-ke-size="size8">&nbsp;</p>
    \`\`\`

### 핵심 구성 요소 (HTML 본문에 포함)
1.  **메타 설명 박스**: 독자의 흥미를 유발하고 게시글 전체 내용을 요약하는 박스입니다.
    * **구조**:
        \`\`\`html
        <div style="background-color: {{META_BOX_BG}}; padding: 15px; border-radius: 8px; font-style: italic; margin-bottom: 25px; font-size: 15px;">
            <strong>[주요 키워드/질문 형태의 문장]</strong> [주제에 대한 간략한 설명과 글을 읽어야 하는 이유를 제시하는 1-2 문장]
        </div>
        \`\`\`
2.  **도입부**: 독자와의 공감대를 형성하고 글의 주제를 소개하는 단락입니다.
    * **구조**:
        \`\`\`html
        <p style="margin-bottom: 15px;">[개인적인 경험이나 독자가 공감할 수 있는 상황 제시.
문제 제기 및 해결책 암시. 친근한 어조와 적절한 이모티콘(예: 😊) 사용]</p>
        \`\`\`
3.  **주요 섹션 제목 (\`<h2>\`)**: 각 주요 내용 단락을 구분하는 제목입니다.
    * **구조**:
        \`\`\`html
        <h2 style="font-size: 22px; color: {{H2_COLOR}}; margin: 30px 0 15px; padding-bottom: 8px; border-bottom: 2px solid {{META_BOX_BG}};">
            <strong>[섹션 제목 텍스트]</strong> [관련 이모티콘]
        </h2>
        \`\`\`
4.  **섹션 간 여백**: 주요 섹션(\`<h2>\`) 또는 내용상 구분이 필요한 부분 사이에 충분한 여백을 제공합니다.
    \`\`\`html
    <p data-ke-size="size16">&nbsp;</p>
    \`\`\`
5.  **본문 단락 (\`<p>\`)**: 일반적인 내용을 작성하는 단락입니다.
    \`\`\`html
    <p style="margin-bottom: 15px;">[내용 작성. 일상 대화체를 사용하며, 전문 용어 사용 시 쉽게 풀어서 설명합니다.]</p>
    \`\`\`
6.  **텍스트 하이라이트**: 본문 내 특정 키워드나 문구를 시각적으로 강조합니다.
    \`\`\`html
    <span style="background-color: {{HIGHLIGHT_BG}}; padding: 2px 4px; border-radius: 3px;">[강조할 텍스트]</span>
    \`\`\`
7.  **팁/알림 박스**: 독자에게 유용한 추가 정보나 팁을 제공하는 박스입니다. (예: \`💡 알아두세요!\`, \`📌 알아두세요!\`)
    * **구조**:
        \`\`\`html
        <div style="background-color: {{TIP_BOX_BG}}; border-left: 4px solid {{TIP_BOX_BORDER}}; padding: 15px; margin: 20px 0; border-radius: 0 8px 8px 0;">
            <strong>[아이콘 + 문구]</strong><br>
            [내용]
        </div>
        \`\`\`
8.  **경고/주의 박스**: 독자가 주의해야 할 사항이나 흔한 실수를 알리는 박스입니다.
    \`\`\`html
    <div style="background-color: {{WARN_BOX_BG}}; border-left: 4px solid {{WARN_BOX_BORDER}}; padding: 15px; margin: 20px 0; border-radius: 0 8px 8px 0;">
        <strong>⚠️ 주의하세요!</strong><br>
        [내용]
    </div>
    \`\`\`
9.  **표 활용 (\`<table>\`)**: 정보를 비교하거나 구조화하여 보여줄 때 사용합니다.
    * **구조**:
        \`\`\`html
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <thead>
                <tr>
                    <th style="padding: 12px; text-align: left; border: 1px solid {{TABLE_BORDER}}; background-color: {{TABLE_HEADER_BG}}; font-weight: bold;">[열 제목 1]</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 12px; text-align: left; border: 1px solid {{TABLE_BORDER}};">[내용]</td>
                </tr>
                <tr style="background-color: {{TABLE_EVEN_ROW_BG}};">
                    <td style="padding: 12px; text-align: left; border: 1px solid {{TABLE_BORDER}};">[내용]</td>
                </tr>
            </tbody>
        </table>
        \`\`\`
10. **예시/사례 박스**: 구체적인 예시, 계산 과정, 또는 사례를 설명하는 박스입니다.
    * **구조**:
        \`\`\`html
        <div style="background-color: {{EXAMPLE_BOX_BG}}; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h3 style="font-size: 18px; color: {{EXAMPLE_BOX_HEADER}}; margin: 0 0 10px;">[예시 소제목 📝]</h3>
        </div>
        \`\`\`
11. **목록 활용 (\`<ol>\`, \`<ul>\`)**: 정보를 나열하거나 단계를 설명할 때 사용합니다. 각 \`<li>\`에는 \`margin-bottom\`을 적용합니다.
    * **구조**:
        \`\`\`html
        <ol style="margin: 0 0 15px 20px; padding: 0;">
            <li style="margin-bottom: 8px;">[항목 1]</li>
        </ol>
        \`\`\`
12. **본문 내 요약 섹션**: 글의 주요 내용을 다시 한번 정리하여 독자의 이해를 돕습니다.
    * **구조**:
        \`\`\`html
        <h2 style="font-size: 22px; color: {{H2_COLOR}}; margin: 30px 0 15px; padding-bottom: 8px; border-bottom: 2px solid {{META_BOX_BG}};">
            <strong>[글의 핵심 요약 제목] 📝</strong>
        </h2>
        \`\`\`
13. **점선 구분선**: 내용 전환이나 시각적 구분을 위해 사용합니다.
    \`\`\`html
    <div style="border-top: 1px dashed {{DASHED_BORDER}}; margin: 30px 0;"></div>
    \`\`\`
14. **시각화된 요약 카드**: 글 전체의 핵심 내용을 한눈에 볼 수 있는 카드를 제공합니다.
    * **구조**:
        \`\`\`html
        <style>
            .single-summary-card-container {
                font-family: 'Noto Sans KR', sans-serif;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 20px 10px;
                background-color: {{SUMMARY_CARD_CONTAINER_BG}};
                margin: 20px 0;
            }
            .single-summary-card {
                width: 100%; max-width: 700px; background-color: #ffffff; border-radius: 12px;
                box-shadow: 0 6px 18px rgba(0,0,0,0.12); padding: 25px; display: flex; flex-direction: column;
                overflow: hidden; border: 1px solid {{SUMMARY_CARD_BORDER}}; box-sizing: border-box;
            }
            .single-summary-card .card-header {
                display: flex; align-items: center; border-bottom: 2px solid {{SUMMARY_CARD_HEADER_BORDER}};
                padding-bottom: 12px; margin-bottom: 12px;
            }
            .single-summary-card .card-header-icon {
                font-size: 34px; color: {{SUMMARY_CARD_HEADER_ICON}}; margin-right: 14px;
            }
            .single-summary-card .card-header h3 {
                font-size: 26px; color: {{SUMMARY_CARD_HEADER_H3}}; margin: 0; line-height: 1.3; font-weight: 700;
            }
            .single-summary-card .card-content {
                flex-grow: 1; display: flex; flex-direction: column; justify-content: space-around;
                font-size: 17px; line-height: 1.65; color: #333;
            }
            .single-summary-card .card-content .section { margin-bottom: 10px; }
            .single-summary-card .card-content strong { color: {{SUMMARY_CARD_STRONG}}; font-weight: 600; }
            .single-summary-card .card-content .highlight {
                background-color: {{SUMMARY_CARD_HIGHLIGHT_BG}}; padding: 2px 6px; border-radius: 3px; font-weight: bold;
            }
            .single-summary-card .card-content .formula {
                background-color: {{SUMMARY_CARD_FORMULA_BG}}; padding: 6px 10px; border-radius: 4px; font-size: 0.9em;
                text-align: center; margin-top: 5px; color: {{SUMMARY_CARD_FORMULA_TEXT}};
            }
            .single-summary-card .card-footer {
                font-size: 14px; color: #777; text-align: center; padding-top: 12px;
                border-top: 1px dashed {{SUMMARY_CARD_FOOTER_BORDER}}; margin-top: auto;
            }
            @media (max-width: 768px) {
                .single-summary-card { padding: 18px; }
                .single-summary-card .card-header h3 { font-size: 20px; }
                .single-summary-card .card-content { font-size: 15px; }
            }
             @media (max-width: 480px) {
                .single-summary-card { padding: 15px; }
                .single-summary-card .card-header h3 { font-size: 18px; }
                .single-summary-card .card-content { font-size: 14px; }
            }
        </style>
        <div class="single-summary-card-container">
            <div class="single-summary-card">
                 <!-- 카드 내용... -->
            </div>
        </div>
        \`\`\`
15. **FAQ 섹션**: 자주 묻는 질문과 답변을 제공합니다.
    * **구조**:
        \`\`\`html
        <h2 style="font-size: 22px; color: {{H2_COLOR}}; margin: 30px 0 15px; padding-bottom: 8px; border-bottom: 2px solid {{META_BOX_BG}};">
            <strong>자주 묻는 질문 ❓</strong>
        </h2>
        \`\`\`
16. **JSON-LD 스키마**: 검색 엔진 최적화를 위해 FAQ 관련 구조화된 데이터를 HTML 본문 하단에 포함합니다.
    \`\`\`html
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "[질문 내용]",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "[답변 내용]"
                }
            }
        ]
    }
    </script>
    \`\`\`
17. **마무리 문단**: 독자에게 추가 질문을 유도하거나 긍정적인 메시지를 전달하며 글을 마칩니다.

### 콘텐츠 작성 지침
*   **문체와 톤**: 인간적이고 자연스러운 대화체 사용. 1인칭 시점 활용. 쉬운 단어 사용. 이모티콘 활용.
*   **콘텐츠 구조화**: 도입부(공감대 형성), 본문(명확한 구조, 시각적 요소), 마무리(핵심 요약, 실천 독려).
*   **시각적 요소 활용**: 강조 박스, 표, 목록, 하이라이트 적극 사용.

### HTML 본문 외 부가 정보
- HTML 본문 생성 후, 아래 형식으로 부가 정보를 별도로 생성합니다.
\`\`\`text
[부가 정보 시작]
## 1. 핵심 키워드
...
## 2. 대표 이미지 생성 프롬프트
...
## 3. SEO 최적화 제목 제안 (5개)
...
[부가 정보 종료]
\`\`\`
`;
