// import PageHeader from "../components/PageHeader"; 

// const Orders = () => {
//   return (
//     <div>
//       <PageHeader 
//         title="Order List" 
//         breadcrumb="Orders" 
//         buttonText="+ Add New Order" 
//       />
      
//       <div className="mt-4 p-4 bg-white shadow rounded-xl">
//         <p className="text-gray-600">Halaman ini akan menampilkan daftar pesanan pelanggan Sedap Restaurant.</p>
//       </div>
//     </div>
//   );
// };

// export default Orders;


import PageHeader from "../components/PageHeader";
import orderData from "../data/orders.json"; // Sesuaikan path-nya
export default function Orders() {
  return (
    <div className="p-4">
      <PageHeader title="Order List" breadcrumb="Orders">
        <button className="bg-hijau text-white px-6 py-2 rounded-lg 
        font-semibold shadow-md hover:bg-green-700 transition-all">
          + Add Orders
        </button>
      </PageHeader>
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden mt-6">
        <table className="w-full text-left">
          <thead className="bg-gray-50 text-gray-500 text-xs uppercase font-bold">
            <tr>
              <th className="p-4">Order ID</th>
              <th className="p-4">Customer Name</th>
              <th className="p-4">Status</th>
              <th className="p-4">Total Price</th>
              <th className="p-4">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {orderData.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                <td className="p-4 font-bold text-gray-700">{order.id}</td>
                <td className="p-4">{order.name}</td>
                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    order.status === 'Completed' ? 'bg-green-100 text-green-600' : 
                    order.status === 'Pending' ? 'bg-yellow-100 text-yellow-600' :
                     'bg-red-100 text-red-600'
                  }`}>{order.status}</span>
                </td>
                <td className="p-4 font-bold text-hijau">{order.price}</td>
                <td className="p-4 text-gray-400">{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}