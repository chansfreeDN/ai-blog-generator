
import { GoogleGenAI, Type } from "@google/genai";
import type { ColorTheme, GeneratedPost } from '../types';
import { PROMPT_GUIDELINES } from "../constants";

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

function replacePlaceholders(template: string, colors: ColorTheme['colors']): string {
    return template
        .replace(/{{TEXT_COLOR}}/g, colors.text)
        .replace(/{{META_BOX_BG}}/g, colors.metaBoxBg)
        .replace(/{{H2_COLOR}}/g, colors.h2)
        .replace(/{{HIGHLIGHT_BG}}/g, colors.highlightBg)
        .replace(/{{TIP_BOX_BG}}/g, colors.tipBoxBg)
        .replace(/{{TIP_BOX_BORDER}}/g, colors.tipBoxBorder)
        .replace(/{{WARN_BOX_BG}}/g, colors.warnBoxBg)
        .replace(/{{WARN_BOX_BORDER}}/g, colors.warnBoxBorder)
        .replace(/{{TABLE_BORDER}}/g, colors.tableBorder)
        .replace(/{{TABLE_HEADER_BG}}/g, colors.tableHeaderBg)
        .replace(/{{TABLE_EVEN_ROW_BG}}/g, colors.tableEvenRowBg)
        .replace(/{{EXAMPLE_BOX_BG}}/g, colors.exampleBoxBg)
        .replace(/{{EXAMPLE_BOX_HEADER}}/g, colors.exampleBoxHeader)
        .replace(/{{DASHED_BORDER}}/g, colors.dashedBorder)
        .replace(/{{SUMMARY_CARD_CONTAINER_BG}}/g, colors.summaryCardContainerBg)
        .replace(/{{SUMMARY_CARD_BORDER}}/g, colors.summaryCardBorder)
        .replace(/{{SUMMARY_CARD_HEADER_BORDER}}/g, colors.summaryCardHeaderBorder)
        .replace(/{{SUMMARY_CARD_HEADER_ICON}}/g, colors.summaryCardHeaderIcon)
        .replace(/{{SUMMARY_CARD_HEADER_H3}}/g, colors.summaryCardHeaderH3)
        .replace(/{{SUMMARY_CARD_STRONG}}/g, colors.summaryCardStrong)
        .replace(/{{SUMMARY_CARD_HIGHLIGHT_BG}}/g, colors.summaryCardHighlightBg)
        .replace(/{{SUMMARY_CARD_FORMULA_BG}}/g, colors.summaryCardFormulaBg)
        .replace(/{{SUMMARY_CARD_FORMULA_TEXT}}/g, colors.summaryCardFormulaText)
        .replace(/{{SUMMARY_CARD_FOOTER_BORDER}}/g, colors.summaryCardFooterBorder);
}

export const generateBlogPost = async (topic: string, theme: ColorTheme): Promise<GeneratedPost> => {
    try {
        const processedGuidelines = replacePlaceholders(PROMPT_GUIDELINES, theme.colors);

        const finalPrompt = `
You are an expert blog post generator that follows a strict set of rules.
Your task is to generate a comprehensive blog post about the topic: "${topic}".

You MUST use the provided color theme for all inline styles by replacing the placeholders in the HTML templates. The final HTML should not contain any {{...}} placeholders.

Here are the detailed instructions and HTML templates you must follow:
--- INSTRUCTIONS START ---
${processedGuidelines}
--- INSTRUCTIONS END ---

Based on ALL the instructions above, the provided topic, and the color theme, generate the blog post.

Your final output must be a single, valid JSON object. Do not add any text, explanations, or markdown formatting before or after the JSON object.
The JSON object must have exactly two keys:
1. "htmlContent": A string containing the full HTML body of the blog post.
2. "additionalInfo": A string containing the "부가 정보" section (keywords, image prompt, SEO titles), formatted exactly as requested in the instructions.
`;

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: finalPrompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        htmlContent: { type: Type.STRING },
                        additionalInfo: { type: Type.STRING },
                    },
                    required: ["htmlContent", "additionalInfo"],
                },
                temperature: 0.7,
            },
        });
        
        const jsonString = response.text.trim();
        const result: GeneratedPost = JSON.parse(jsonString);

        if (!result.htmlContent || !result.additionalInfo) {
            throw new Error("Received an invalid response structure from the API.");
        }

        return result;

    } catch (error) {
        console.error("Error generating blog post:", error);
        if (error instanceof Error) {
            throw new Error(`Failed to generate blog post: ${error.message}`);
        }
        throw new Error("An unknown error occurred while communicating with the AI model.");
    }
};
