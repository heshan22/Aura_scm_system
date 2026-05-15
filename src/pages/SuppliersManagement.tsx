import { Plus, CreditCard as Edit2, Trash2, Search } from 'lucide-react';
import { useState } from 'react';

export default function SuppliersManagement() {
  const [suppliers, setSuppliers] = useState([
    {
      id: 1,
      name: 'Anchor Food Products (Pvt) Ltd',
      contactPerson: 'Priyantha Silva',
      email: 'priyantha@anchor.lk',
      phone: '+94 11 234 5678',
      address: '123 Galle Road, Colombo 03, Sri Lanka',
      totalOrders: 145,
      rating: 4.8,
    },
    {
      id: 2,
      name: 'Maliban Biscuit Manufactories Ltd',
      contactPerson: 'Chaminda Perera',
      email: 'chaminda@maliban.com',
      phone: '+94 11 345 6789',
      address: '456 High Level Road, Ratmalana, Sri Lanka',
      totalOrders: 98,
      rating: 4.6,
    },
    {
      id: 3,
      name: 'Ceylon Tea Services PLC',
      contactPerson: 'Nimal Fernando',
      email: 'nimal@ceylontea.lk',
      phone: '+94 81 456 7890',
      address: '789 Peradeniya Road, Kandy, Sri Lanka',
      totalOrders: 76,
      rating: 4.7,
    },
    {
      id: 4,
      name: 'Kotmale Holdings PLC',
      contactPerson: 'Sunil Jayawardena',
      email: 'sunil@kotmale.com',
      phone: '+94 52 567 8901',
      address: '321 Kotmale Road, Nawalapitiya, Sri Lanka',
      totalOrders: 112,
      rating: 4.5,
    },
    {
      id: 5,
      name: 'Kist Manufacturing (Pvt) Ltd',
      contactPerson: 'Roshan Wickramasinghe',
      email: 'roshan@kist.lk',
      phone: '+94 11 678 9012',
      address: '654 Pannipitiya Road, Homagama, Sri Lanka',
      totalOrders: 89,
      rating: 4.4,
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editingSupplier, setEditingSupplier] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    contactPerson: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleAddSupplier = () => {
    if (formData.name && formData.email) {
      if (editingSupplier) {
        // Update existing supplier
        setSuppliers(suppliers.map(s => 
          s.id === editingSupplier 
            ? { ...s, ...formData }
            : s
        ));
        setEditingSupplier(null);
      } else {
        // Add new supplier
        const newSupplier = {
          id: Math.max(...suppliers.map(s => s.id)) + 1,
          ...formData,
          totalOrders: 0,
          rating: 0,
        };
        setSuppliers([...suppliers, newSupplier]);
      }
      
      setFormData({
        name: '',
        contactPerson: '',
        email: '',
        phone: '',
        address: '',
      });
      setShowForm(false);
    }
  };

  const handleEdit = (supplier: any) => {
    setFormData({
      name: supplier.name,
      contactPerson: supplier.contactPerson,
      email: supplier.email,
      phone: supplier.phone,
      address: supplier.address,
    });
    setEditingSupplier(supplier.id);
    setShowForm(true);
  };

  const handleDelete = (id: number) => {
    setSuppliers(suppliers.filter((s) => s.id !== id));
  };

  const handleCancel = () => {
    setFormData({
      name: '',
      contactPerson: '',
      email: '',
      phone: '',
      address: '',
    });
    setEditingSupplier(null);
    setShowForm(false);
  };

  return (
    <main className="p-6 md:p-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Aura SCM Suppliers Management</h1>
        <p className="text-slate-600 mt-2">Add, edit, and manage supplier information</p>
      </div>

      <div className="bg-white rounded-lg shadow border border-slate-200 p-6 mb-6">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search suppliers..."
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            {editingSupplier ? 'Cancel Edit' : 'Add Supplier'}
          </button>
        </div>

        {showForm && (
          <div className="border-t border-slate-200 pt-6">
            <h3 className="font-semibold text-slate-900 mb-4">
              {editingSupplier ? 'Edit Supplier' : 'New Supplier'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Supplier Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <input
                type="text"
                placeholder="Contact Person"
                value={formData.contactPerson}
                onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                className="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <input
                type="tel"
                placeholder="Phone (+94 XX XXX XXXX)"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <input
                type="text"
                placeholder="Address"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none md:col-span-2"
              />
            </div>
            <div className="flex gap-3 mt-4">
              <button
                onClick={handleAddSupplier}
                className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg transition"
              >
                {editingSupplier ? 'Update Supplier' : 'Save Supplier'}
              </button>
              <button
                onClick={handleCancel}
                className="border border-slate-300 text-slate-700 font-medium py-2 px-6 rounded-lg hover:bg-slate-50 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="bg-white rounded-lg shadow border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="text-left px-6 py-3 font-semibold text-slate-900">Supplier Name</th>
                <th className="text-left px-6 py-3 font-semibold text-slate-900">Contact Person</th>
                <th className="text-left px-6 py-3 font-semibold text-slate-900">Email</th>
                <th className="text-left px-6 py-3 font-semibold text-slate-900">Phone</th>
                <th className="text-left px-6 py-3 font-semibold text-slate-900">Orders</th>
                <th className="text-left px-6 py-3 font-semibold text-slate-900">Rating</th>
                <th className="text-left px-6 py-3 font-semibold text-slate-900">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {suppliers.map((supplier) => (
                <tr key={supplier.id} className="hover:bg-slate-50 transition">
                  <td className="px-6 py-4 font-medium text-slate-900">{supplier.name}</td>
                  <td className="px-6 py-4 text-slate-600">{supplier.contactPerson}</td>
                  <td className="px-6 py-4 text-slate-600">{supplier.email}</td>
                  <td className="px-6 py-4 text-slate-600">{supplier.phone}</td>
                  <td className="px-6 py-4 text-slate-900">{supplier.totalOrders}</td>
                  <td className="px-6 py-4">
                    <span className="text-amber-600 font-medium">★ {supplier.rating}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button 
                        onClick={() => handleEdit(supplier)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded transition"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(supplier.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded transition"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
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