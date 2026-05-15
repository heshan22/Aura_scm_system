import { Search, AlertCircle, Package } from 'lucide-react';

export default function Inventory() {
  const items = [
    { sku: 'KEL-001', name: 'Anchor Milk Powder 400g', quantity: 145, reorder: 100, price: 1250.00 },
    { sku: 'KEL-002', name: 'Maliban Cream Crackers', quantity: 35, reorder: 80, price: 180.00 },
    { sku: 'KEL-003', name: 'Basmati Rice 5kg', quantity: 220, reorder: 150, price: 2850.00 },
    { sku: 'KEL-004', name: 'Ceylon Tea Bags 100s', quantity: 25, reorder: 60, price: 450.00 },
    { sku: 'KEL-005', name: 'Coconut Oil 500ml', quantity: 180, reorder: 120, price: 680.00 },
    { sku: 'KEL-006', name: 'Dhal Red 1kg', quantity: 95, reorder: 100, price: 320.00 },
    { sku: 'KEL-007', name: 'Kotmale Fresh Milk 1L', quantity: 45, reorder: 80, price: 285.00 },
    { sku: 'KEL-008', name: 'Munchee Lemon Puff', quantity: 160, reorder: 100, price: 95.00 },
    { sku: 'KEL-009', name: 'Kist Tomato Sauce 400g', quantity: 75, reorder: 90, price: 165.00 },
    { sku: 'KEL-010', name: 'Sunquick Orange 700ml', quantity: 120, reorder: 80, price: 385.00 },
  ];

  const getLowStockBadge = (quantity: number, reorder: number) => {
    if (quantity < reorder) {
      return 'bg-red-100 text-red-700';
    } else if (quantity < reorder * 1.2) {
      return 'bg-orange-100 text-orange-700';
    }
    return 'bg-green-100 text-green-700';
  };

  const getLowStockLabel = (quantity: number, reorder: number) => {
    if (quantity < reorder) {
      return 'Low Stock';
    } else if (quantity < reorder * 1.2) {
      return 'Monitor';
    }
    return 'In Stock';
  };

  const lowStockCount = items.filter(item => item.quantity < item.reorder).length;

  return (
    <main className="p-6 md:p-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Aura SCM Inventory</h1>
        <p className="text-slate-600 mt-2">Manage your product inventory</p>
      </div>

      <div className="bg-white rounded-lg shadow border border-slate-200 p-6 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by SKU or product name..."
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition">
            Add Item
          </button>
        </div>
      </div>

      {lowStockCount > 0 && (
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-orange-900">Low Stock Alert</p>
            <p className="text-sm text-orange-800">{lowStockCount} items are below reorder level</p>
          </div>
        </div>
      )}

      <div className="bg-white rounded-lg shadow border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="text-left px-6 py-3 font-semibold text-slate-900">SKU</th>
                <th className="text-left px-6 py-3 font-semibold text-slate-900">Product Name</th>
                <th className="text-left px-6 py-3 font-semibold text-slate-900">Quantity</th>
                <th className="text-left px-6 py-3 font-semibold text-slate-900">Reorder Level</th>
                <th className="text-left px-6 py-3 font-semibold text-slate-900">Unit Price (LKR)</th>
                <th className="text-left px-6 py-3 font-semibold text-slate-900">Status</th>
                <th className="text-left px-6 py-3 font-semibold text-slate-900">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {items.map((item, i) => (
                <tr key={i} className="hover:bg-slate-50 transition">
                  <td className="px-6 py-4">
                    <code className="text-sm font-medium text-slate-900">{item.sku}</code>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Package className="w-4 h-4 text-slate-400" />
                      <span className="text-slate-900">{item.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-900 font-medium">{item.quantity}</td>
                  <td className="px-6 py-4 text-slate-600">{item.reorder}</td>
                  <td className="px-6 py-4 text-slate-900">LKR {item.price.toFixed(2)}</td>
                  <td className="px-6 py-4">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getLowStockBadge(item.quantity, item.reorder)}`}>
                      {getLowStockLabel(item.quantity, item.reorder)}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                      Edit
                    </button>
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