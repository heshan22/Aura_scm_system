import { Search, Star, Phone, Mail, MapPin } from 'lucide-react';

export default function Suppliers() {
  const suppliers = [
    {
      id: 1,
      name: 'Anchor Food Products (Pvt) Ltd',
      contact: 'Priyantha Silva',
      email: 'priyantha@anchor.lk',
      phone: '+94 11 234 5678',
      location: 'Colombo 03, Sri Lanka',
      rating: 4.8,
      status: 'active',
    },
    {
      id: 2,
      name: 'Maliban Biscuit Manufactories Ltd',
      contact: 'Chaminda Perera',
      email: 'chaminda@maliban.com',
      phone: '+94 11 345 6789',
      location: 'Ratmalana, Sri Lanka',
      rating: 4.6,
      status: 'active',
    },
    {
      id: 3,
      name: 'Ceylon Tea Services PLC',
      contact: 'Nimal Fernando',
      email: 'nimal@ceylontea.lk',
      phone: '+94 81 456 7890',
      location: 'Kandy, Sri Lanka',
      rating: 4.7,
      status: 'active',
    },
    {
      id: 4,
      name: 'Kotmale Holdings PLC',
      contact: 'Sunil Jayawardena',
      email: 'sunil@kotmale.com',
      phone: '+94 52 567 8901',
      location: 'Nawalapitiya, Sri Lanka',
      rating: 4.5,
      status: 'active',
    },
    {
      id: 5,
      name: 'Kist Manufacturing (Pvt) Ltd',
      contact: 'Roshan Wickramasinghe',
      email: 'roshan@kist.lk',
      phone: '+94 11 678 9012',
      location: 'Homagama, Sri Lanka',
      rating: 4.4,
      status: 'active',
    },
    {
      id: 6,
      name: 'Munchee (Ceylon) Biscuits Ltd',
      contact: 'Lakmal Rajapaksa',
      email: 'lakmal@munchee.com',
      phone: '+94 11 789 0123',
      location: 'Kelaniya, Sri Lanka',
      rating: 4.3,
      status: 'inactive',
    },
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < Math.floor(rating) ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}`}
          />
        ))}
      </div>
    );
  };

  return (
    <main className="p-6 md:p-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Aura SCM Suppliers</h1>
        <p className="text-slate-600 mt-2">View and manage supplier information</p>
      </div>

      <div className="bg-white rounded-lg shadow border border-slate-200 p-6 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search suppliers..."
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition">
            Add Supplier
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {suppliers.map((supplier) => (
          <div
            key={supplier.id}
            className="bg-white rounded-lg shadow border border-slate-200 p-6 hover:shadow-lg transition"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">{supplier.name}</h3>
                <p className="text-sm text-slate-600">Contact: {supplier.contact}</p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  supplier.status === 'active'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-slate-100 text-slate-700'
                }`}
              >
                {supplier.status === 'active' ? 'Active' : 'Inactive'}
              </span>
            </div>

            <div className="mb-4">
              {renderStars(supplier.rating)}
              <p className="text-sm text-slate-600 mt-1">{supplier.rating}/5.0 rating</p>
            </div>

            <div className="space-y-2 mb-4 text-sm">
              <div className="flex items-center gap-2 text-slate-600">
                <Mail className="w-4 h-4" />
                {supplier.email}
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <Phone className="w-4 h-4" />
                {supplier.phone}
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <MapPin className="w-4 h-4" />
                {supplier.location}
              </div>
            </div>

            <button className="w-full text-blue-600 hover:text-blue-700 font-medium text-sm py-2 border border-blue-200 rounded-lg hover:bg-blue-50 transition">
              View Details
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}