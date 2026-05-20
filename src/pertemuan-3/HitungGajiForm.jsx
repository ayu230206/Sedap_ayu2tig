import { useState } from "react";//pemanggilan method useState untuk membuat state gaji
export default function HitungGajiForm() {//adalah component untuk menghitung gaji bersih setelah dipotong pajak
  const [gaji, setGaji] = useState("");//deklarasi state gaji dengan nilai awal berupa string kosong
  const pajak = 0.11;//deklarasi variabel pajak dengan nilai 11% (0.11)
  const totalGaji = gaji - gaji * pajak;//deklarasi variabel totalGaji untuk menghitung gaji bersih setelah dipotong pajak
  return (
    <div className="flex flex-col items-center justify-center m-5 p-5 bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-4 text-gray-700">
          Hitung Gaji Bersih
        </h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">
            Gaji Pokok
          </label>
          <input
            type="number"
            placeholder="Masukkan jumlah gaji"
            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setGaji(e.target.value)}//event handler onChange untuk memperbarui state gaji 
            // - setiap kali pengguna mengubah nilai input
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">
            Pajak: <b class="text-red-500">11%</b>
          </label>
        </div>
        {!gaji ? (//kondisi untuk menampilkan pesan error jika gaji kosong atau tidak valid
          <div className="mt-4 p-3 bg-red-100 border-l-4 border-red-500 text-red-700">
            <p className="font-semibold">
              Silakan masukkan gaji yang valid (tidak boleh kosong atau
              negatif).
            </p>
          </div>
        ) : (
          <div className="mt-4 p-3 bg-blue-100 border-l-4 border-blue-500 text-blue-700">
            <p className="font-semibold">
              Total Take Home Pay (THP): Rp {totalGaji.toLocaleString()}//menampilkan total gaji bersih dengan format angka Indonesia
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
