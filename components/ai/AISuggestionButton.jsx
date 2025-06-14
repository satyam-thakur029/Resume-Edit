import React, { useState } from 'react';
import { FaLightbulb, FaSpinner, FaTimes } from 'react-icons/fa';

const AISuggestionButton = ({ section, content }) => {
  const [suggestions, setSuggestions] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGetSuggestions = async () => {
    if (!content.trim()) {
      setSuggestions("Please add some content first to get suggestions");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/suggestions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          section,
          content
        }),
      });
      const data = await response.json();
      setSuggestions(data.suggestions || "No suggestions available");
    } catch (error) {
      console.error('Suggestions error:', error);
      setSuggestions("Failed to get suggestions. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="mb-4">
      <div className="flex justify-end">
        <button
          onClick={handleGetSuggestions}
          className={`flex items-center gap-2 px-3 py-2 rounded-md transition-all
            ${loading 
              ? 'bg-gray-300 text-gray-700' 
              : 'bg-gray-900 text-white'}
          `}
          disabled={loading}
        >
          {loading ? (
            <FaSpinner className="animate-spin" />
          ) : (
            <FaLightbulb className="animate-pulse" style={{ 
              filter: 'drop-shadow(0 0 4px rgba(255, 255, 0, 0.7))',
              animationDuration: '2s' 
            }} />
          )}
         
        </button>
      </div>
      
      {suggestions && (
        <div className="mt-3 bg-white border border-gray-200 rounded-md shadow-sm">
          <div className="p-3">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-gray-800 font-medium">AI Suggestions</h3>
              <button
                onClick={() => setSuggestions('')}
                className="text-gray-400 hover:text-gray-600"
              >
                <FaTimes />
              </button>
            </div>
            <div className="text-gray-700 text-sm whitespace-pre-line">
              {suggestions}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AISuggestionButton;