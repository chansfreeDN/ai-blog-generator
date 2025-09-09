
import React from 'react';
import { COLOR_THEMES } from '../constants';
import type { ColorTheme } from '../types';

interface ThemeSelectorProps {
  selectedTheme: ColorTheme;
  onSelectTheme: (theme: ColorTheme) => void;
}

export const ThemeSelector: React.FC<ThemeSelectorProps> = ({ selectedTheme, onSelectTheme }) => {
  return (
    <div className="grid grid-cols-2 gap-3">
      {COLOR_THEMES.map((theme) => (
        <button
          key={theme.id}
          type="button"
          onClick={() => onSelectTheme(theme)}
          className={`p-3 rounded-md border text-left transition-all duration-200 ${
            selectedTheme.id === theme.id
              ? 'border-blue-500 ring-2 ring-blue-500 shadow-md'
              : 'border-gray-300 hover:border-blue-400 hover:shadow-sm'
          }`}
        >
          <div className="flex items-center space-x-2 mb-1">
             <div className="w-4 h-4 rounded-full" style={{ backgroundColor: theme.colors.primary }}></div>
             <div className="w-4 h-4 rounded-full" style={{ backgroundColor: theme.colors.accent }}></div>
             <div className="w-4 h-4 rounded-full" style={{ backgroundColor: theme.colors.h2 }}></div>
          </div>
          <p className="text-sm font-semibold text-gray-800">{theme.name}</p>
          <p className="text-xs text-gray-500">{theme.description}</p>
        </button>
      ))}
    </div>
  );
};
