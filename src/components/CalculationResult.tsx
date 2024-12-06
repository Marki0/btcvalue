import React from 'react';
import { CalculationResult } from '../types/calculator';
import { formatPrice } from '../utils/formatters';

interface CalculationResultProps {
  result: CalculationResult;
}

export const CalculationResultDisplay: React.FC<CalculationResultProps> = ({ result }) => {
  const isPositiveDifference = result.difference > 0;

  return (
    <div className="space-y-6">
      <div className="bg-gray-800 rounded-lg p-6">
        <h3 className="text-xl font-bold mb-4">Valor de tus Bitcoin</h3>
        <div className="space-y-2">
          <p className="flex justify-between">
            <span className="text-gray-400">Precio Promedio Histórico:</span>
            <span className="font-semibold">{formatPrice(result.historicalPrice)} por BTC</span>
          </p>
          <p className="flex justify-between">
            <span className="text-gray-400">Valor cuando Vendiste:</span>
            <span className="font-semibold">{formatPrice(result.soldValue)}</span>
          </p>
          <p className="flex justify-between">
            <span className="text-gray-400">Valor Actual:</span>
            <span className="font-semibold">{formatPrice(result.currentValue)}</span>
          </p>
          <div className="border-t border-gray-700 my-2"></div>
          <p className="flex justify-between">
            <span className="text-gray-400">Diferencia:</span>
            <span className={`font-bold ${isPositiveDifference ? 'text-green-500' : 'text-red-500'}`}>
              {isPositiveDifference ? '+' : ''}{formatPrice(result.difference)}
            </span>
          </p>
        </div>
      </div>

      {result.purchaseExamples.length > 0 && (
        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">Lo que Podrías Comprar Hoy</h3>
          <div className="space-y-3">
            {result.purchaseExamples.map((example, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <span className="text-2xl">{example.icon}</span>
                  <span>{example.name}</span>
                </span>
                <span className="font-semibold">x{example.quantity}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};