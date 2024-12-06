export interface CalculatorInput {
  btcAmount: number;
  soldDate: string;
}

export interface PurchaseExample {
  name: string;
  price: number;
  icon: string;
  quantity: number;
}

export interface CalculationResult {
  soldValue: number;
  currentValue: number;
  difference: number;
  purchaseExamples: PurchaseExample[];
  historicalPrice: number;
}