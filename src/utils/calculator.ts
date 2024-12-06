import { CalculatorInput, CalculationResult } from '../types/calculator';
import { PURCHASE_EXAMPLES } from '../config/constants';

export const calculateRegret = (
  input: CalculatorInput,
  currentPrice: number,
  historicalPrice: number
): CalculationResult => {
  const soldValue = input.btcAmount * historicalPrice;
  const currentValue = input.btcAmount * currentPrice;
  const difference = currentValue - soldValue;

  const purchaseExamples = PURCHASE_EXAMPLES.map(example => ({
    ...example,
    quantity: Math.floor(currentValue / example.price)
  })).filter(example => example.quantity > 0);

  return {
    soldValue,
    currentValue,
    difference,
    purchaseExamples,
    historicalPrice
  };
};