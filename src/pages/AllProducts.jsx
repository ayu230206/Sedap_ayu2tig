import React from "react";
import menuData from "../data/listMenu.json"; // Pastikan path file JSON benar

const AllProducts = () => {
  // Helper untuk format Rupiah
  const formatRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-3xl font-extrabold text-[#05264E] mb-2">
            Semua Menu <span className="text-[#7E7CF6]">Sedap.</span>
          </h1>
          <p className="text-gray-500">Pilih hidangan favoritmu dari dapur kami.</p>
        </div>

        {/* Grid Produk */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuData.map((item) => (
            <div 
              key={item.kode_produk} 
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 group"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.nama_produk}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {item.stok === 0 && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase">
                      Habis
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg text-[#05264E] leading-tight">
                    {item.nama_produk}
                  </h3>
                  <span className="text-xs font-medium text-gray-400 bg-gray-50 px-2 py-1 rounded">
                    {item.kode_produk}
                  </span>
                </div>
                
                <p className="text-[#7E7CF6] font-extrabold text-xl mb-4">
                  {formatRupiah(item.harga)}
                </p>

                <div className="flex items-center justify-between">
                  <span className={`text-sm ${item.stok > 0 ? 'text-gray-500' : 'text-red-400 font-medium'}`}>
                    Stok: {item.stok}
                  </span>
                  <button 
                    disabled={item.stok === 0}
                    className={`px-4 py-2 rounded-lg font-bold text-sm transition-colors ${
                      item.stok > 0 
                      ? 'bg-[#7E7CF6] text-white hover:bg-indigo-600' 
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    Tambah
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;