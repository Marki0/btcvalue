import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { formatPrice, formatPercentage } from '../utils/formatters';

interface PriceDisplayProps {
  price: number;
  change24h: number;
  change7d: number;
}

export const PriceDisplay: React.FC<PriceDisplayProps> = ({ price, change24h, change7d }) => {
  return (
    <div className="text-center">
      <h2 className="text-6xl font-bold mb-4">{formatPrice(price)}</h2>
      <div className="flex justify-center gap-6">
        <div className={`flex items-center ${change24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
          {change24h >= 0 ? <TrendingUp className="w-5 h-5 mr-1" /> : <TrendingDown className="w-5 h-5 mr-1" />}
          <span className="font-semibold">24h: {formatPercentage(change24h)}</span>
        </div>
        <div className={`flex items-center ${change7d >= 0 ? 'text-green-500' : 'text-red-500'}`}>
          {change7d >= 0 ? <TrendingUp className="w-5 h-5 mr-1" /> : <TrendingDown className="w-5 h-5 mr-1" />}
          <span className="font-semibold">7d: {formatPercentage(change7d)}</span>
        </div>
      </div>
    </div>
  );
};