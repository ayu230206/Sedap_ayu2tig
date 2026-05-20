import React from "react";
import { Outlet, Link } from "react-router-dom";

const GuestLayout = () => {
  return (
    <div className="font-sans text-[#05264E] bg-white min-h-screen flex flex-col">
      {/* NAVBAR / HEADER (20 Poin) */}
      <nav className="flex justify-between items-center px-6 md:px-10 py-5 bg-white sticky top-0 z-50 border-b border-gray-50">
        {/* Logo Sedap dengan aksen grid (Ref: image_64147f.png) */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-extrabold text-[#05264E] tracking-tight">
            Sedap.
          </span>
        </div>

        <div className="space-x-8 hidden lg:flex text-sm font-bold">
          {/* Geser ke bagian paling atas */}
          <a
            href="#home"
            className="text-[#05264E] hover:text-[#7E7CF6] transition cursor-pointer"
          >
            Home
          </a>

          {/* Geser ke section Produk Unggulan */}
          <a
            href="#produk"
            className="text-[#05264E] hover:text-[#7E7CF6] transition cursor-pointer"
          >
            Produk Unggulan
          </a>

          {/* Geser ke section Ulasan Pengguna */}
          <a
            href="#ulasan"
            className="text-[#05264E] hover:text-[#7E7CF6] transition cursor-pointer"
          >
            Ulasan
          </a>

          {/* Navigasi ke halaman baru (Semua Menu) */}
          <Link
            to="/guest/all-products"
            className="text-[#05264E] hover:text-[#7E7CF6] transition"
          >
            Semua Menu
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            to="/register"
            className="text-[#7E7CF6] font-bold text-sm hidden md:flex items-center gap-1 hover:underline"
          >
            Register
          </Link>
          <Link to="/login">
            <button className="px-8 py-3 bg-[#7E7CF6] text-white rounded-xl font-bold hover:bg-indigo-600 shadow-lg shadow-indigo-100 transition text-sm">
              Login
            </button>
          </Link>
        </div>
      </nav>

      {/* Konten Utama */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* FOOTER (10 Poin) */}
      <footer className="bg-white pt-20 pb-10 px-6 md:px-10 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          {/* Logo Partner Sebelum Footer Content (Ref: image_64147f.png) */}
          {/* Food Partners (Update sesuai tema Sedap.) */}
          <div className="flex flex-wrap justify-between items-center opacity-40 grayscale gap-8 mb-16 pb-16 border-b border-gray-50">
            {/* GrabFood */}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/03/Grab_Logo.svg"
              alt="GrabFood"
              className="h-8 md:h-10 object-contain"
            />
            {/* Gojek / GoFood */}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Logo_Gojek.svg"
              alt="GoFood"
              className="h-10 md:h-12 object-contain"
            />
            {/* Shopee */}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fe/Shopee.svg"
              alt="ShopeeFood"
              className="h-10 md:h-12 object-contain"
            />
            {/* Foodpanda */}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/05/Foodpanda_logo.svg"
              alt="Foodpanda"
              className="h-10 md:h-12 object-contain"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
            {/* Branding & Contact Info */}
            <div className="md:col-span-2 space-y-6">
              <span className="text-xl font-bold text-[#05264E]">Sedap.</span>
              <div className="text-gray-500 text-sm space-y-2">
                <p>📍 Jl. Kuliner No. 123, Pekanbaru</p>
                <p>📧 hello@sedap.com</p>
                <p>📞 (021) 555-0123</p>
              </div>
            </div>
            <div>
              <h5 className="font-bold text-[#05264E] mb-6">Company</h5>
              <ul className="space-y-4 text-sm text-gray-500">
                <li className="hover:text-[#7E7CF6] cursor-pointer">
                  About us
                </li>
                <li className="hover:text-[#7E7CF6] cursor-pointer">
                  Our Team
                </li>
                <li className="hover:text-[#7E7CF6] cursor-pointer">Contact</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-[#05264E] mb-6">Product</h5>
              <ul className="space-y-4 text-sm text-gray-500">
                <li className="hover:text-[#7E7CF6] cursor-pointer">Menu</li>
                <li className="hover:text-[#7E7CF6] cursor-pointer">Pricing</li>
                <li className="hover:text-[#7E7CF6] cursor-pointer">FAQ</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-[#05264E] mb-6">Social Media</h5>
              <div className="flex gap-3">
                {[
                  {
                    name: "facebook",
                    icon: (
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-2.21c0-.837.398-1.29 1.146-1.29h2.854v-4.5h-4.41c-3.136 0-5.59 2.066-5.59 5.231v2.769z" />
                      </svg>
                    ),
                  },
                  {
                    name: "twitter",
                    icon: (
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    ),
                  },
                  {
                    name: "instagram",
                    icon: (
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    ),
                  },
                  {
                    name: "linkedin",
                    icon: (
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.989v-10.1c0-7.865-8.724-7.593-11.019-3.375v-2.526z" />
                      </svg>
                    ),
                  },
                ].map((social) => (
                  <div
                    key={social.name}
                    className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-[#7E7CF6] hover:text-white cursor-pointer transition shadow-sm"
                  >
                    {social.icon}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-100 text-center md:text-left">
            <p className="text-sm text-gray-400">
              Copyright ©2026{" "}
              <span className="text-[#7E7CF6] font-bold">Sedap Restaurant</span>
              . All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GuestLayout;
