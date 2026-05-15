import { BarChart3, LineChart, PieChart } from 'lucide-react';

export default function Analytics() {
  return (
    <main className="p-6 md:p-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Aura SCM Analytics</h1>
        <p className="text-slate-600 mt-2">Supply chain performance metrics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6 border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-slate-900">Revenue Trend</h3>
            <LineChart className="w-5 h-5 text-blue-600" />
          </div>
          <p className="text-2xl font-bold text-slate-900">LKR 2.8M</p>
          <p className="text-sm text-green-600 mt-2">↑ 15% from last month</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6 border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-slate-900">Order Volume</h3>
            <BarChart3 className="w-5 h-5 text-green-600" />
          </div>
          <p className="text-2xl font-bold text-slate-900">1,542</p>
          <p className="text-sm text-green-600 mt-2">↑ 12% from last month</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6 border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-slate-900">Avg Order Value</h3>
            <PieChart className="w-5 h-5 text-amber-600" />
          </div>
          <p className="text-2xl font-bold text-slate-900">LKR 1,850</p>
          <p className="text-sm text-orange-600 mt-2">↓ 3% from last month</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6 border border-slate-200">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">Monthly Revenue (LKR)</h2>
          <div className="h-64 bg-gradient-to-t from-blue-100 to-blue-50 rounded-lg flex items-end justify-between p-4">
            {[40, 65, 45, 70, 55, 80, 75].map((height, i) => (
              <div
                key={i}
                className="w-8 bg-blue-500 rounded-t hover:bg-blue-600 transition"
                style={{ height: `${height}%` }}
                title={`Month ${i + 1}: LKR ${(height * 50000).toLocaleString()}`}
              />
            ))}
          </div>
          <div className="flex justify-between text-xs text-slate-500 mt-2">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
            <span>Jul</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 border border-slate-200">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">Top Product Categories</h2>
          <div className="space-y-4">
            {[
              { label: 'Dairy Products', value: 35, color: 'bg-green-500' },
              { label: 'Rice & Grains', value: 25, color: 'bg-blue-500' },
              { label: 'Beverages', value: 20, color: 'bg-amber-500' },
              { label: 'Snacks & Biscuits', value: 15, color: 'bg-purple-500' },
              { label: 'Condiments', value: 5, color: 'bg-red-500' },
            ].map((item, i) => (
              <div key={i}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-slate-700">{item.label}</span>
                  <span className="text-sm font-medium text-slate-900">{item.value}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div
                    className={`${item.color} h-2 rounded-full`}
                    style={{ width: `${item.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}