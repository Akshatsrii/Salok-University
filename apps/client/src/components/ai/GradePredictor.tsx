
import { useState } from 'react';
import { TrendingUp, BarChart2, AlertCircle } from 'lucide-react';

export const GradePredictor = () => {
  const [analyzing, setAnalyzing] = useState(false);
  const [prediction, setPrediction] = useState<{ passRate: string; atRiskCount: number } | null>(null);

  const handlePredict = () => {
    setAnalyzing(true);
    // Simulate AI prediction from placement-ai / recommendation engine
    setTimeout(() => {
      setPrediction({
        passRate: '87.4%',
        atRiskCount: 12
      });
      setAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h3 className="text-xl font-bold text-gray-900 mb-2">Class Performance Predictor</h3>
      <p className="text-sm text-gray-500 mb-6">Use AI to predict final grades based on mid-terms and attendance.</p>
      
      <button 
        onClick={handlePredict}
        disabled={analyzing}
        className="w-full py-3 bg-indigo-600 text-white rounded-md font-bold flex items-center justify-center gap-2 hover:bg-indigo-700 transition-colors disabled:bg-indigo-400"
      >
        {analyzing ? 'Running AI Model...' : 'Predict Performance for Sem 6'}
      </button>

      {prediction && (
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="p-4 bg-green-50 border border-green-100 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-green-600" />
              <span className="font-semibold text-green-800">Predicted Pass Rate</span>
            </div>
            <p className="text-3xl font-extrabold text-green-600">{prediction.passRate}</p>
          </div>

          <div className="p-4 bg-orange-50 border border-orange-100 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle className="w-5 h-5 text-orange-600" />
              <span className="font-semibold text-orange-800">At-Risk Students</span>
            </div>
            <p className="text-3xl font-extrabold text-orange-600">{prediction.atRiskCount}</p>
          </div>
        </div>
      )}
    </div>
  );
};
