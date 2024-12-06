import axios from 'axios';
import { CRYPTO_COMPARE_BASE_URL, CURRENCY } from '../config/constants';
import { BitcoinData } from '../types/bitcoin';

export const fetchHistoricalPrice = async (year: number, month: number): Promise<number> => {
  // Get the first day of the selected month
  const startDate = new Date(year, month - 1, 1);
  // Get the last day of the selected month
  const endDate = new Date(year, month, 0);
  
  const response = await axios.get(
    `${CRYPTO_COMPARE_BASE_URL}/v2/histoday`,
    {
      params: {
        fsym: CURRENCY.CRYPTO,
        tsym: CURRENCY.FIAT,
        toTs: Math.floor(endDate.getTime() / 1000),
        limit: endDate.getDate() // number of days in the month
      }
    }
  );

  const prices = response.data.Data.Data.map((d: any) => d.close);
  // Calculate average price for the month
  const averagePrice = prices.reduce((a: number, b: number) => a + b, 0) / prices.length;
  return averagePrice;
};

export const fetchCurrentPrice = async (): Promise<number> => {
  const response = await axios.get(
    `${CRYPTO_COMPARE_BASE_URL}/price`,
    {
      params: {
        fsym: CURRENCY.CRYPTO,
        tsyms: CURRENCY.FIAT
      }
    }
  );
  return response.data.USD;
};

export const fetchBitcoinData = async (year: number, month: number): Promise<{ currentPrice: number; historicalPrice: number }> => {
  try {
    const [currentPrice, historicalPrice] = await Promise.all([
      fetchCurrentPrice(),
      fetchHistoricalPrice(year, month)
    ]);

    return {
      currentPrice,
      historicalPrice
    };
  } catch (error) {
    console.error('Error fetching Bitcoin data:', error);
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.Message || 
        error.response?.data?.message || 
        'Error al obtener datos de Bitcoin'
      );
    }
    throw error;
  }
};