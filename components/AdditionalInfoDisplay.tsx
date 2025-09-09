import React, { useState } from 'react';

interface ParsedInfo {
  keywords: string[];
  imagePrompt: string;
  titles: string[];
}

interface AdditionalInfoDisplayProps {
  info: ParsedInfo;
}

const CopyButton: React.FC<{ textToCopy: string }> = ({ textToCopy }) => {
    const [copied, setCopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText(textToCopy).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <button
            onClick={handleCopy}
            className="text-xs bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-1 px-2 rounded-md transition-colors duration-200 flex items-center self-start"
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            {copied ? '복사됨!' : '복사'}
        </button>
    );
};


export const AdditionalInfoDisplay: React.FC<AdditionalInfoDisplayProps> = ({ info }) => {
  return (
    <div className="p-4 border border-gray-200 rounded-b-lg bg-white space-y-8">
      
      <div className="space-y-3">
        <h3 className="text-lg font-bold text-gray-800 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-5 5a2 2 0 01-2.828 0l-7-7A2 2 0 013 8v5a2 2 0 002 2h.01" /></svg>
            핵심 키워드
        </h3>
        <div className="flex flex-wrap gap-2">
          {info.keywords.length > 0 ? info.keywords.map((keyword, index) => (
            <span key={index} className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
              {keyword}
            </span>
          )) : <p className="text-gray-500 text-sm">키워드를 찾을 수 없습니다.</p>}
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-bold text-gray-800 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            대표 이미지 생성 프롬프트
        </h3>
        <div className="bg-gray-50 p-4 rounded-lg flex items-start justify-between gap-4">
          <p className="text-gray-700 text-base flex-grow">{info.imagePrompt || '프롬프트를 찾을 수 없습니다.'}</p>
          {info.imagePrompt && <CopyButton textToCopy={info.imagePrompt} />}
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-bold text-gray-800 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
            SEO 최적화 제목 제안
        </h3>
        {info.titles.length > 0 ? (
            <ul className="space-y-2">
            {info.titles.map((title, index) => (
                <li key={index} className="bg-gray-50 p-3 rounded-md flex items-center justify-between gap-4">
                    <span className="text-gray-800">{title}</span>
                    <CopyButton textToCopy={title} />
                </li>
            ))}
            </ul>
        ) : <p className="text-gray-500 text-sm">제목을 찾을 수 없습니다.</p>}
      </div>
    </div>
  );
};
