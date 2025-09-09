
export interface ColorThemeColors {
  primary: string;
  background: string;
  accent: string;
  text: string;
  h2: string;
  metaBoxBg: string;
  tipBoxBg: string;
  tipBoxBorder: string;
  warnBoxBg: string;
  warnBoxBorder: string;
  tableHeaderBg: string;
  tableBorder: string;
  tableEvenRowBg: string;
  exampleBoxBg: string;
  exampleBoxHeader: string;
  highlightBg: string;
  dashedBorder: string;
  summaryCardContainerBg: string;
  summaryCardBorder: string;
  summaryCardHeaderBorder: string;
  summaryCardHeaderIcon: string;
  summaryCardHeaderH3: string;
  summaryCardStrong: string;
  summaryCardHighlightBg: string;
  summaryCardFormulaBg: string;
  summaryCardFormulaText: string;
  summaryCardFooterBorder: string;
}

export interface ColorTheme {
  id: number;
  name: string;
  description: string;
  colors: ColorThemeColors;
}

export interface GeneratedPost {
  htmlContent: string;
  additionalInfo: string;
}
