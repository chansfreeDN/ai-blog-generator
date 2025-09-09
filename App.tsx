
import React, { useState } from 'react';
import { Header } from './components/Header';
import { BlogGeneratorForm } from './components/BlogGeneratorForm';
import { GeneratedContent } from './components/GeneratedContent';
import { Loader } from './components/Loader';
import type { GeneratedPost } from './types';
import { generateBlogPost } from './services/geminiService';
import type { ColorTheme } from './types';

const App: React.FC = () => {
  const [generatedPost, setGeneratedPost] = useState<GeneratedPost | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async (topic: string, theme: ColorTheme) => {
    setIsLoading(true);
    setError(null);
    setGeneratedPost(null);

    try {
      const result = await generateBlogPost(topic, theme);
      setGeneratedPost(result);
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <BlogGeneratorForm onGenerate={handleGenerate} isLoading={isLoading} />
          </div>
          <div className="lg:col-span-8">
            {isLoading && <Loader />}
            {error && (
              <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md" role="alert">
                <p className="font-bold">Error</p>
                <p>{error}</p>
              </div>
            )}
            {generatedPost && <GeneratedContent post={generatedPost} />}
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
