// import PageHeader from "../components/PageHeader";
// const Customers = () => {
//   return (
//     <div>
//       <PageHeader 
//         title="Customers" 
//         breadcrumb="Customer List" 
//         buttonText="+ Add New Customer" 
//       />
      
//       <div className="mt-4 p-4 bg-white shadow rounded-xl">
//         <p className="text-gray-600">Halaman ini akan menampilkan daftar data pelanggan setia kamu.</p>
//       </div>
//     </div>
//   );
// };

// export default Customers;

import PageHeader from "../components/PageHeader";
import customerData from "../data/customers.json"; // Sesuaikan path-nya
export default function Customers() {
  return (
    <div className="p-4">
      <PageHeader title="Customers" breadcrumb="Customer List">
        <button className="bg-hijau text-white px-6 py-2 rounded-lg 
        font-semibold shadow-md hover:bg-green-700 transition-all">
          + Add Customer
        </button>
      </PageHeader>
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden mt-6">
        <table className="w-full text-left">
          <thead className="bg-gray-50 text-gray-500 text-xs uppercase font-bold">
            <tr>
              <th className="p-4">ID</th>
              <th className="p-4">Customer Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Phone</th>
              <th className="p-4">Loyalty</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {customerData.map((cust) => (
              <tr key={cust.id} className="hover:bg-gray-50 transition-colors">
                <td className="p-4 font-mono text-xs">{cust.id}</td>
                <td className="p-4 font-bold">{cust.name}</td>
                <td className="p-4 text-gray-500">{cust.email}</td>
                <td className="p-4 text-sm">{cust.phone}</td>
                <td className="p-4">
                  <span className={`font-bold ${
                    cust.loyalty === 'Gold' ? 'text-yellow-500' : 
                    cust.loyalty === 'Silver' ? 'text-gray-400' : 'text-orange-400'
                  }`}>{cust.loyalty}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}