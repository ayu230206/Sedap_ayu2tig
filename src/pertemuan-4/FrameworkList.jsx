import React, { useState } from "react";
import frameworkData from "./framework.json";

export default function FrameworkList() {
  const [dataForm, setDataForm] = useState({
    searchTerm: "",
    selectedTag: "",
  });

  // Fungsi handle perubahan input yang general
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  // Logic memfilter data berdasarkan nama, deskripsi, dan tag
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

  // Mengambil list tag unik untuk dropdown filter
  const allTags = [
    ...new Set(frameworkData.flatMap((framework) => framework.tags)),
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Framework List</h1>

      {/* Bagian Input Search & Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <input
          type="text"
          name="searchTerm"
          value={dataForm.searchTerm}
          onChange={handleChange}
          placeholder="Search framework..."
          className="w-full md:w-2/3 p-2 border border-gray-300 rounded shadow-sm focus:outline-blue-500"
        />

        <select
          name="selectedTag"
          value={dataForm.selectedTag}
          onChange={handleChange}
          className="w-full md:w-1/3 p-2 border border-gray-300 rounded shadow-sm focus:outline-blue-500"
        >
          <option value="">All Tags</option>
          {allTags.map((tag, index) => (
            <option key={index} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </div>

      {/* Bagian Grid List Data */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFrameworks.map((item) => (
          <div key={item.id} className="border p-5 rounded-xl shadow-md bg-white flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-800">{item.name}</h2>
              <p className="text-gray-600 mb-4">{item.description}</p>
              
              {/* Menampilkan Nested Data */}
              <div className="text-sm text-gray-500 mb-4 bg-gray-50 p-2 rounded">
                <p>Developed By: {item.details.developer}</p>
                <p>
                     <a href={item.details.officialWebsite} className="text-blue-500 hover:underline" target="_blank" rel="noreferrer">Visit Website</a>
                </p>
              </div>
            </div>

            {/* Menampilkan Tags */}
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="bg-indigo-100 text-indigo-700 px-3 py-1 text-xs rounded-full font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      
    </div>
  );
}