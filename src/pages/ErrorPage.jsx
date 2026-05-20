import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4">
      <div className="bg-white shadow-md rounded-xl p-8 max-w-lg w-full text-center">
        {/* Angka 404 */}
        <h1 className="text-9xl font-extrabold text-gray-200 tracking-widest mb-4">
          404
        </h1>
        
        {/* Pesan Error */}
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Halaman Tidak Ditemukan
        </h2>
        <p className="text-gray-500 mb-8">
          Maaf, halaman yang kamu cari tidak ada, telah dihapus, atau mungkin namanya telah diubah.
        </p>

        {/* Tombol Kembali */}
        <a 
          href="/" 
          className="inline-block px-6 py-3 bg-green-800 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300 shadow-sm"
        >
          Kembali ke Beranda
        </a>
      </div>
    </div>
  );
};

export default NotFound;