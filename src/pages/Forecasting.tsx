import { TrendingUp, Calendar } from 'lucide-react';

export default function Forecasting() {
  const forecasts = [
    { product: 'Anchor Milk Powder 400g', date: '2026-04-15', demand: 180, confidence: 92 },
    { product: 'Maliban Cream Crackers', date: '2026-04-16', demand: 95, confidence: 85 },
    { product: 'Basmati Rice 5kg', date: '2026-04-17', demand: 280, confidence: 88 },
    { product: 'Ceylon Tea Bags 100s', date: '2026-04-18', demand: 75, confidence: 78 },
    { product: 'Coconut Oil 500ml', date: '2026-04-19', demand: 150, confidence: 91 },
    { product: 'Dhal Red 1kg', date: '2026-04-20', demand: 120, confidence: 86 },
    { product: 'Kotmale Fresh Milk 1L', date: '2026-04-21', demand: 90, confidence: 89 },
    { product: 'Munchee Lemon Puff', date: '2026-04-22', demand: 140, confidence: 83 },
    { product: 'Kist Tomato Sauce 400g', date: '2026-04-23', demand: 110, confidence: 87 },
    { product: 'Sunquick Orange 700ml', date: '2026-04-24', demand: 95, confidence: 84 },
  ];

  const totalDemand = forecasts.reduce((sum, forecast) => sum + forecast.demand, 0);
  const avgConfidence = Math.round(forecasts.reduce((sum, forecast) => sum + forecast.confidence, 0) / forecasts.length);

  return (
    <main className="p-6 md:p-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Aura SCM Demand Forecasting</h1>
        <p className="text-slate-600 mt-2">AI-powered demand predictions</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6 border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-slate-900">Avg Confidence</h3>
            <TrendingUp className="w-5 h-5 text-blue-600" />
          </div>
          <p className="text-3xl font-bold text-slate-900">{avgConfidence}%</p>
          <p className="text-sm text-slate-600 mt-2">Based on historical data</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6 border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-slate-900">Next 10 Days</h3>
            <Calendar className="w-5 h-5 text-green-600" />
          </div>
          <p className="text-3xl font-bold text-slate-900">{totalDemand.toLocaleString()}</p>
          <p className="text-sm text-slate-600 mt-2">Predicted total demand</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6 border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-slate-900">Accuracy</h3>
            <TrendingUp className="w-5 h-5 text-emerald-600" />
          </div>
          <p className="text-3xl font-bold text-slate-900">94%</p>
          <p className="text-sm text-slate-600 mt-2">Last 30 days</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-200">
          <h2 className="text-lg font-semibold text-slate-900">Next 10 Days Forecast</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="text-left px-6 py-3 font-semibold text-slate-900">Product</th>
                <th className="text-left px-6 py-3 font-semibold text-slate-900">Forecast Date</th>
                <th className="text-left px-6 py-3 font-semibold text-slate-900">Predicted Demand</th>
                <th className="text-left px-6 py-3 font-semibold text-slate-900">Confidence Level</th>
                <th className="text-left px-6 py-3 font-semibold text-slate-900">Trend</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {forecasts.map((forecast, i) => (
                <tr key={i} className="hover:bg-slate-50 transition">
                  <td className="px-6 py-4 text-slate-900 font-medium">{forecast.product}</td>
                  <td className="px-6 py-4 text-slate-600">{forecast.date}</td>
                  <td className="px-6 py-4">
                    <span className="text-slate-900 font-semibold">{forecast.demand}</span>
                    <span className="text-slate-500 text-sm"> units</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-green-500"
                          style={{ width: `${forecast.confidence}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium text-slate-900">
                        {forecast.confidence}%
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-green-600 font-medium">↑ Increasing</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}