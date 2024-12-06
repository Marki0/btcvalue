export const CRYPTO_COMPARE_BASE_URL = 'https://min-api.cryptocompare.com/data';
export const UPDATE_INTERVAL = 60000; // 1 minute in milliseconds

export const CURRENCY = {
  CRYPTO: 'BTC',
  FIAT: 'USD'
} as const;

export const PURCHASE_EXAMPLES = [
  { name: 'Auto 0Km', price: 20000, icon: '🚗' },
  { name: 'Depto en Palermo', price: 90000, icon: '🏠' },
  { name: 'Vacaciones a Miami', price: 2000, icon: '✈️' },
  { name: 'Big Mac', price: 5, icon: '🍔' },
  { name: 'Combo Sasha Ferro', price: 5000, icon: '⛵' },
  { name: 'Cafe Starbucks', price: 50, icon: '☕' }
] as const;
