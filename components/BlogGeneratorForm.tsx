
import React, { useState } from 'react';
import { COLOR_THEMES } from '../constants';
import type { ColorTheme } from '../types';
import { ThemeSelector } from './ThemeSelector';

interface BlogGeneratorFormProps {
  onGenerate: (topic: string, theme: ColorTheme) => void;
  isLoading: boolean;
}

export const BlogGeneratorForm: React.FC<BlogGeneratorFormProps> = ({ onGenerate, isLoading }) => {
  const [topic, setTopic] = useState<string>('');
  const [selectedTheme, setSelectedTheme] = useState<ColorTheme>(COLOR_THEMES[0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (topic.trim() && selectedTheme) {
      onGenerate(topic, selectedTheme);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg sticky top-8">
      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          <div>
            <label htmlFor="topic" className="block text-lg font-semibold text-gray-700 mb-2">
              1. 블로그 주제 입력
            </label>
            <input
              type="text"
              id="topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="예: 효과적인 시간 관리 방법"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition duration-150"
              required
            />
          </div>

          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              2. 컬러 테마 선택
            </label>
            <ThemeSelector selectedTheme={selectedTheme} onSelectTheme={setSelectedTheme} />
          </div>
        </div>

        <div className="mt-8">
          <button
            type="submit"
            disabled={isLoading || !topic.trim()}
            className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                생성 중...
              </>
            ) : (
              '블로그 포스트 생성하기'
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
