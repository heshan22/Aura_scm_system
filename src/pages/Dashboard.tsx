import { BarChart3, TrendingUp, Package, Users } from 'lucide-react';

export default function Dashboard() {
  const stats = [
    {
      title: 'Total Suppliers',
      value: '18',
      change: '+2 this month',
      icon: Users,
      color: 'blue',
    },
    {
      title: 'Inventory Items',
      value: '1,485',
      change: '+85 items',
      icon: Package,
      color: 'green',
    },
    {
      title: 'Revenue',
      value: 'LKR 2.8M',
      change: '+15% from last month',
      icon: TrendingUp,
      color: 'emerald',
    },
    {
      title: 'Orders',
      value: '542',
      change: '+28 pending',
      icon: BarChart3,
      color: 'amber',
    },
  ];

  const recentOrders = [
    { id: 1001, time: '2 hours ago', status: 'Completed', product: 'Anchor Milk Powder' },
    { id: 1002, time: '4 hours ago', status: 'Processing', product: 'Ceylon Tea Bags' },
    { id: 1003, time: '6 hours ago', status: 'Completed', product: 'Basmati Rice 5kg' },
  ];

  const lowStockItems = [
    { sku: 'KEL-002', name: 'Maliban Cream Crackers', remaining: 35 },
    { sku: 'KEL-004', name: 'Ceylon Tea Bags 100s', remaining: 25 },
    { sku: 'KEL-007', name: 'Kotmale Fresh Milk 1L', remaining: 45 },
  ];

  const colorClasses = {
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600',
    emerald: 'bg-emerald-100 text-emerald-600',
    amber: 'bg-amber-100 text-amber-600',
  };

  return (
    <main className="p-6 md:p-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Aura SCM Dashboard</h1>
        <p className="text-slate-600 mt-2">Welcome to your supply chain management system</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          const colorClass = colorClasses[stat.color as keyof typeof colorClasses];

          return (
            <div
              key={index}
              className="bg-white rounded-lg shadow p-6 border border-slate-200 hover:shadow-lg transition"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg ${colorClass}`}>
                  <Icon className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-slate-600 text-sm font-medium mb-1">{stat.title}</h3>
              <div className="flex items-baseline justify-between">
                <p className="text-2xl md:text-3xl font-bold text-slate-900">
                  {stat.value}
                </p>
              </div>
              <p className="text-xs text-slate-500 mt-2">{stat.change}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6 border border-slate-200">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">Recent Orders</h2>
          <div className="space-y-4">
            {recentOrders.map((order) => (
              <div key={order.id} className="flex items-center justify-between pb-4 border-b border-slate-200 last:border-0">
                <div>
                  <p className="font-medium text-slate-900">Order #{order.id}</p>
                  <p className="text-sm text-slate-500">{order.product}</p>
                  <p className="text-sm text-slate-500">{order.time}</p>
                </div>
                <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                  order.status === 'Completed' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-blue-100 text-blue-700'
                }`}>
                  {order.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 border border-slate-200">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">Low Stock Items</h2>
          <div className="space-y-4">
            {lowStockItems.map((item) => (
              <div key={item.sku} className="flex items-center justify-between pb-4 border-b border-slate-200 last:border-0">
                <div>
                  <p className="font-medium text-slate-900">{item.name}</p>
                  <p className="text-sm text-slate-500">{item.sku}</p>
                  <p className="text-sm text-slate-500">{item.remaining} units remaining</p>
                </div>
                <span className="px-3 py-1 bg-orange-100 text-orange-700 text-sm font-medium rounded-full">
                  Alert
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}