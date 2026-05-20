import React, { useState } from "react";
import frameworkData from "./framework.json";

// 1. Inisialisasi State (Best Practice)
export default function FrameworkListSearchFilter() {
  //const [selectTerm, setSearchData] = useState(); dugunakan untuk menyimpan satu data saja

  const [dataForm, setDataForm] = useState({
    searchTerm: "",
    selectedTag: "",
  });
// 2. Handle perubahan input
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
// 3. Logic Search & Filter
  const _searchTerm = dataForm.searchTerm.toLowerCase();
  const filteredFrameworks = frameworkData.filter((framework) => {
    const matchesSearch =
      framework.name.toLowerCase().includes(_searchTerm) ||
      framework.description.toLowerCase().includes(_searchTerm);

    const matchesTag = dataForm.selectedTag
      ? framework.tags.includes(dataForm.selectedTag)
      : true;

    return matchesSearch && matchesTag;
  });
// 4. Ambil unique tags untuk dropdown
  const allTags = [...new Set(frameworkData.flatMap((f) => f.tags))];
// 5. Render UI
  return (
    <div className="p-6 md:p-12 bg-slate-50 min-h-screen font-sans text-slate-900">
      {/* Header Section */}
      <header className="max-w-6xl mx-auto mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Framework Explorer
        </h1>
        <p className="text-slate-500 text-lg">
          Temukan teknologi terbaik untuk proyek masa depan Anda.
        </p>
      </header>
      {/* Modern Search & Filter Bar */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="bg-white p-2 rounded-2xl shadow-xl shadow-slate-200/60 flex flex-col md:flex-row gap-2 border border-slate-100">
          <div className="relative flex-grow">
            <span className="absolute inset-y-0 left-3 flex items-center text-slate-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            <input
              type="text"
              name="searchTerm"
              value={dataForm.searchTerm}
              onChange={handleChange}
              placeholder="Cari framework (misal: React, UI...)"
              className="w-full pl-10 pr-4 py-3 rounded-xl border-none focus:ring-2 focus:ring-blue-500 outline-none transition-all text-slate-700 placeholder:text-slate-400"
            />
          </div>
          
          <div className="h-px md:h-8 md:w-px bg-slate-200 self-center"></div>

          <select
            name="selectedTag"
            value={dataForm.selectedTag}
            onChange={handleChange}
            className="px-4 py-3 rounded-xl border-none bg-transparent focus:ring-2 focus:ring-blue-500 outline-none cursor-pointer text-slate-600 font-medium"
          >
            <option value="">Semua Kategori</option>
            {allTags.map((tag) => (
              <option key={tag} value={tag}>{tag}</option>
            ))}
          </select>
        </div>
        
        {/* Result Count Indicator */}
        <p className="mt-4 text-sm text-slate-400 ml-2">
          Menampilkan <span className="font-semibold text-slate-700">{filteredFrameworks.length}</span> framework
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {filteredFrameworks.length > 0 ? (
          filteredFrameworks.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white border border-slate-100 p-6 rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Subtle Gradient Accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <h2 className="text-2xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                {item.name}
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2">
                {item.description}
              </p>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-xs text-slate-400">
                  <span className="w-20 font-semibold uppercase tracking-wider text-slate-300">Creator</span>
                  <span className="text-slate-600">{item.details.developer}</span>
                </div>
                <div className="flex items-center text-xs text-slate-400">
                  <span className="w-20 font-semibold uppercase tracking-wider text-slate-300">Link</span>
                  <a href={item.details.officialWebsite} target="_blank" rel="noreferrer" className="text-blue-500 hover:text-blue-700 font-medium truncate">
                    Official Site →
                  </a>
                </div>
              </div>

              {/* Tag Badges */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-50">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-slate-100 text-slate-600 px-3 py-1 text-[11px] font-bold rounded-lg group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-20 text-center">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-slate-800">Tidak ada hasil</h3>
            <p className="text-slate-500">Coba kata kunci lain atau reset filter.</p>
          </div>
        )}
      </div>
    </div>
  );
}