import React from 'react';
import { Bitcoin } from 'lucide-react';

interface ErrorDisplayProps {
  message: string;
  onRetry: () => void;
}

export const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ message, onRetry }) => (
  <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
    <div className="text-center p-4">
      <Bitcoin className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
      <p className="text-red-500 text-lg font-semibold mb-4">{message}</p>
      <button 
        onClick={onRetry} 
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
      >
        Try Again
      </button>
    </div>
  </div>
);