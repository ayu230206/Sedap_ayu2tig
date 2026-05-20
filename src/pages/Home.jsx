import React from "react";
import { Link } from "react-router-dom"; // Penting untuk pindah halaman
import products from "../data/produk.json";
import testimonials from "../data/testimoni.json";

const Home = () => {
  return (
    <div className="bg-white font-sans text-slate-900">
      
      {/* SECTION 1: HERO / BANNER (ID: home) */}
      <section id="home" className="bg-[#FFF9F3] py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <span className="text-[#7E7CF6] font-bold text-sm tracking-widest uppercase mb-4 block">
              Best Culinary Place
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-[#05264E] leading-tight mb-6">
              The Easiest Way to Get <br /> Your New Menu
            </h1>
            <p className="text-gray-500 text-lg mb-10">
              Setiap bulan, lebih dari 3 juta pencinta kuliner mengunjungi situs
              kami untuk mencari rasa terbaik. Bergabunglah dengan ribuan
              pelanggan lainnya sekarang.
            </p>
            {/* Tombol geser ke produk */}
            <a href="#produk">
              <button className="bg-[#7E7CF6] text-white px-10 py-4 rounded-xl font-bold hover:bg-indigo-600 transition shadow-lg shadow-indigo-100">
                Mulai Pesanan
              </button>
            </a>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80"
              alt="Hero Culinary"
              className="rounded-[2.5rem] shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 w-full object-cover h-[400px]"
            />
          </div>
        </div>
      </section>

      {/* SECTION 2: TENTANG SEDAP / ABOUT (ID: about) */}
      <section id="about" className="py-24 px-6 max-w-6xl mx-auto border-b border-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
              alt="Tentang Kami"
              className="rounded-3xl shadow-xl z-10 relative"
            />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#FFF9F3] rounded-full -z-0"></div>
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-extrabold text-[#05264E]">
              Tentang Sedap.
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Sedap adalah platform kuliner modern yang berkomitmen menyajikan
              hidangan berkualitas tinggi langsung ke meja Anda. Kami percaya
              bahwa makanan enak berawal dari bahan yang tepat.
            </p>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center gap-4 p-4 bg-white border border-gray-100 rounded-2xl shadow-sm">
                <span className="text-2xl">🌱</span>
                <div>
                  <h4 className="font-bold text-[#05264E]">Bahan Organik</h4>
                  <p className="text-xs text-gray-400">Hanya menggunakan bahan baku pilihan yang segar.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: PRODUK UNGGULAN (ID: produk) */}
      <section id="produk" className="py-24 px-6 bg-[#F8FAFF]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-extrabold text-[#05264E] mb-4">
                Produk Unggulan
              </h2>
              <p className="text-gray-500">
                Nikmati menu terlaris kami yang menjadi favorit ribuan pelanggan.
              </p>
            </div>
  
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.slice(0, 3).map((item) => (
              <div
                key={item.kode_produk}
                className="bg-white p-6 rounded-[2rem] hover:shadow-2xl transition-all duration-300 group border border-transparent hover:border-gray-100"
              >
                <div className="overflow-hidden rounded-2xl mb-6 aspect-[4/3] bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.nama_produk}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80";
                    }}
                  />
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-gray-50">
                  <p className="text-[#7E7CF6] text-xl font-extrabold">
                    Rp {item.harga.toLocaleString("id-ID")}
                  </p>
                  <button className="px-6 py-2 bg-[#F0F4FF] text-[#7E7CF6] rounded-xl font-bold text-sm">Pesan</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: TESTIMONI (ID: ulasan) */}
      <section id="ulasan" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold text-[#05264E] mb-16 text-center">
            Ulasan Pengguna
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="p-8 border border-gray-100 rounded-[2.5rem] bg-white shadow-sm hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center"
              >
                <div className="w-20 h-20 mb-6 relative">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-full h-full border-4 border-[#F0F4FF] rounded-full object-cover shadow-sm"
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&background=7E7CF6&color=fff`;
                    }}
                  />
                  <div className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full shadow-sm"></div>
                </div>
                <h5 className="font-bold text-[#05264E] mb-2 text-sm">{t.name}</h5>
                <p className="text-gray-500 text-[11px] leading-relaxed italic">"{t.review}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: NEWSLETTER (Pemanis) */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto bg-[#4477FF] rounded-[3rem] p-16 text-center text-white shadow-2xl">
          <h2 className="text-4xl font-bold mb-6 relative z-10">Dapatkan Info Menu Terbaru</h2>
          <div className="bg-white rounded-2xl p-2 max-w-2xl mx-auto flex flex-col sm:flex-row items-center gap-2 relative z-10">
            <input
              type="email"
              placeholder="Email Anda..."
              className="flex-1 px-6 py-3 outline-none text-gray-800 w-full bg-transparent"
            />
            <button className="bg-[#7E7CF6] text-white px-10 py-4 rounded-xl font-bold hover:bg-indigo-600 transition w-full sm:w-auto">
              Berlangganan
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;