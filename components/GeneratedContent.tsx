import React, { useState, useMemo } from 'react';
import type { GeneratedPost } from '../types';
import { CodeBlock } from './CodeBlock';
import { AdditionalInfoDisplay } from './AdditionalInfoDisplay';

interface GeneratedContentProps {
  post: GeneratedPost;
}

type Tab = 'preview' | 'html' | 'info';

interface ParsedInfo {
  keywords: string[];
  imagePrompt: string;
  titles: string[];
}

function parseAdditionalInfo(text: string): ParsedInfo {
    const keywordsMatch = text.match(/## 1\.\s*핵심 키워드\s*([\s\S]*?)(?=## 2\.|$)/);
    const imagePromptMatch = text.match(/## 2\.\s*대표 이미지 생성 프롬프트\s*([\s\S]*?)(?=## 3\.|$)/);
    const titlesMatch = text.match(/## 3\.\s*SEO 최적화 제목 제안.*?\n([\s\S]*?)(?=\[부가 정보 종료\]|$)/);

    const keywords = keywordsMatch ? keywordsMatch[1].trim().split('\n').map(k => k.replace(/^- /, '').trim()).filter(Boolean) : [];
    const imagePrompt = imagePromptMatch ? imagePromptMatch[1].trim() : '';
    const titles = titlesMatch ? titlesMatch[1].trim().split('\n').map(t => t.replace(/^\d+\.\s*/, '').trim()).filter(Boolean) : [];
    
    return { keywords, imagePrompt, titles };
}


export const GeneratedContent: React.FC<GeneratedContentProps> = ({ post }) => {
  const [activeTab, setActiveTab] = useState<Tab>('preview');
  const [showRawInfo, setShowRawInfo] = useState<boolean>(false);

  const parsedInfo = useMemo(() => parseAdditionalInfo(post.additionalInfo), [post.additionalInfo]);
  
  const handleTabClick = (tab: Tab) => {
    if (activeTab !== tab && tab !== 'info') {
      setShowRawInfo(false);
    }
    setActiveTab(tab);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'preview':
        return (
          <div
            className="p-4 border border-gray-200 rounded-b-lg bg-white"
            dangerouslySetInnerHTML={{ __html: post.htmlContent }}
          />
        );
      case 'html':
        return <CodeBlock code={post.htmlContent} language="html" />;
      case 'info':
        return (
            <div>
              <AdditionalInfoDisplay info={parsedInfo} />
              <div className="mt-6 text-center">
                <button
                  onClick={() => setShowRawInfo(prev => !prev)}
                  className="text-sm text-blue-600 hover:text-blue-800 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                >
                  {showRawInfo ? '원본 텍스트 숨기기' : '원본 텍스트 보기'}
                </button>
              </div>
              {showRawInfo && (
                <div className="mt-4">
                  <h4 className="text-md font-semibold text-gray-700 mb-2">원본 데이터</h4>
                  <CodeBlock code={post.additionalInfo} language="text" />
                </div>
              )}
            </div>
          );
      default:
        return null;
    }
  };

  const getTabClass = (tab: Tab) => {
    return activeTab === tab
      ? 'border-blue-500 text-blue-600'
      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300';
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">생성된 콘텐츠</h2>
      <div>
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-6" aria-label="Tabs">
            <button
              onClick={() => handleTabClick('preview')}
              className={`whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm ${getTabClass('preview')}`}
            >
              미리보기
            </button>
            <button
              onClick={() => handleTabClick('html')}
              className={`whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm ${getTabClass('html')}`}
            >
              HTML 소스
            </button>
            <button
              onClick={() => handleTabClick('info')}
              className={`whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm ${getTabClass('info')}`}
            >
              부가 정보
            </button>
          </nav>
        </div>
        <div className="mt-4">{renderContent()}</div>
      </div>
    </div>
  );
};