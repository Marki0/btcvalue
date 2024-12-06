import React from 'react';
import { formatLargeNumber } from '../utils/formatters';

interface MarketInfoProps {
  marketCap: number;
  volume24h: number;
}

export const MarketInfo: React.FC<MarketInfoProps> = ({ marketCap, volume24h }) => {
  return (
    <div className="grid grid-cols-2 gap-4 mt-8">
      <div className="bg-white/10 p-4 rounded-lg">
        <h3 className="text-sm text-gray-400">Market Cap</h3>
        <p className="text-xl font-semibold">{formatLargeNumber(marketCap)}</p>
      </div>
      <div className="bg-white/10 p-4 rounded-lg">
        <h3 className="text-sm text-gray-400">24h Volume</h3>
        <p className="text-xl font-semibold">{formatLargeNumber(volume24h)}</p>
      </div>
    </div>
  );
};