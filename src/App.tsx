import { useState } from 'react';
import { Bitcoin } from 'lucide-react';
import { CalculatorForm } from './components/CalculatorForm';
import { CalculationResultDisplay } from './components/CalculationResult';
import { CalculatorInput, CalculationResult } from './types/calculator';
import { calculateRegret } from './utils/calculator';
import { fetchBitcoinData } from './utils/api';
import { LoadingSpinner } from './components/LoadingSpinner';
import { ErrorDisplay } from './components/ErrorDisplay';

function App() {
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const handleCalculate = async (input: CalculatorInput) => {
    try {
      setIsLoading(true);
      setError('');
      
      const [year, month] = input.soldDate.split('-').map(Number);
      const data = await fetchBitcoinData(year, month);
      
      const calculationResult = calculateRegret(input, data.currentPrice, data.historicalPrice);
      setResult(calculationResult);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al calcular resultados');
      setResult(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Bitcoin className="w-16 h-16 text-yellow-500" />
          </div>
          <h1 className="text-3xl font-bold mb-2">Bitcoin Checki</h1>
          <p className="text-gray-400">
            Calcula cuánto valdría tu Bitcoin hoy y que podrias comprar!
          </p>
        </div>

        {error ? (
          <ErrorDisplay message={error} onRetry={() => setError('')} />
        ) : (
          <div className="space-y-8">
            <div className="bg-gray-800 rounded-lg p-6">
              <CalculatorForm onCalculate={handleCalculate} isLoading={isLoading} />
            </div>

            {isLoading ? (
              <LoadingSpinner />
            ) : result ? (
              <CalculationResultDisplay result={result} />
            ) : null}
          </div>
        )}
      </div>
      <footer className="mt-8 text-center text-gray-400 text-sm">
        <p>
          Desarrollado por <a 
            href="https://www.linkedin.com/in/marcossmino/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Marki
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;