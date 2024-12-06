export interface BitcoinPrice {
  USD: number;
}

export interface PriceChange {
  USD: number;
}

export interface BitcoinData {
  currentPrice: number;
  change24h: number;
  change7d: number;
  marketCap: number;
  volume24h: number;
  lastUpdate: string;
}