
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <h1 className="text-3xl font-bold text-gray-800 tracking-tight">
          AI Blog Post Generator 📝
        </h1>
        <p className="text-gray-500 mt-1">
          Create professional, visually appealing blog posts with AI.
        </p>
      </div>
    </header>
  );
};
