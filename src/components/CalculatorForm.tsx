import React from 'react';
import { CalculatorInput } from '../types/calculator';

interface CalculatorFormProps {
  onCalculate: (input: CalculatorInput) => void;
  isLoading: boolean;
}

export const CalculatorForm: React.FC<CalculatorFormProps> = ({ onCalculate, isLoading }) => {
  const [input, setInput] = React.useState<CalculatorInput>({
    btcAmount: 0,
    soldDate: ''
  });

  const currentDate = new Date();
  const maxYear = currentDate.getFullYear();
  const maxMonth = currentDate.getMonth() + 1;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCalculate(input);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">
          Cantidad de BTC
        </label>
        <input
          type="number"
          step="0.00000001"
          required
          className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 text-white"
          value={input.btcAmount}
          onChange={(e) => setInput({ ...input, btcAmount: parseFloat(e.target.value) })}
          placeholder="Ej: 0.5"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">
          Fecha de Venta
        </label>
        <input
          type="month"
          required
          max={`${maxYear}-${maxMonth.toString().padStart(2, '0')}`}
          min="2010-07"
          className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 text-white"
          value={input.soldDate}
          onChange={(e) => setInput({ ...input, soldDate: e.target.value })}
        />
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {isLoading ? 'Calculando...' : 'Calcular'}
      </button>
    </form>
  );
};