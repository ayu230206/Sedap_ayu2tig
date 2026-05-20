import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // Tambahkan Link untuk navigasi
import axios from "axios";
import { BsFillExclamationDiamondFill } from "react-icons/bs";
import { ImSpinner2 } from "react-icons/im";

export default function Login() {
    /* navigate, state & handleChange (Logika tetap sama) */
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [dataForm, setDataForm] = useState({
        email: "",
        password: "",
    });

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setDataForm({
            ...dataForm,
            [name]: value,
        });
    };

    /* process form (Logika tetap sama) */
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        axios
            .post("https://dummyjson.com/user/login", {
                username: dataForm.email,
                password: dataForm.password,
            })
            .then((response) => {
                if (response.status !== 200) {
                    setError(response.data.message);
                    return; 
                }
                navigate("/");
            })
            .catch((err) => {
                if (err.response) {
                    setError(err.response.data.message || "An error occurred");
                } else {
                    setError(err.message || "An unknown error occurred");
                }
            })
            .finally(() => {
                setLoading(false); 
            });
    };

    /* Status Alerts dengan style Sedap. */
    const errorInfo = error ? (
        <div className="bg-red-50 border border-red-100 mb-6 p-4 text-sm font-medium text-red-600 rounded-2xl flex items-center animate-shake">
            <BsFillExclamationDiamondFill className="text-red-500 me-3 text-lg flex-shrink-0" />
            {error}
        </div>
    ) : null;

    const loadingInfo = loading ? (
        <div className="bg-indigo-50 border border-indigo-100 mb-6 p-4 text-sm font-medium text-[#7E7CF6] rounded-2xl flex items-center">
            <ImSpinner2 className="me-3 animate-spin text-lg" />
            Mohon Tunggu...
        </div>
    ) : null;

    return (
        <div className="max-w-md mx-auto my-10 p-10 bg-white rounded-[2.5rem] shadow-xl shadow-indigo-50 border border-gray-50">
            {/* Header Section */}
            <div className="text-center mb-10">
                <h2 className="text-3xl font-extrabold text-[#05264E] mb-3">
                    Welcome Back 👋
                </h2>
                <p className="text-gray-500 text-sm">
                    Silakan masuk untuk melanjutkan petualangan kulinermu.
                </p>
            </div>

            {errorInfo}
            {loadingInfo}

            <form onSubmit={handleSubmit}>
                {/* Email Field */}
                <div className="mb-6">
                    <label className="block text-sm font-bold text-[#05264E] mb-2 ml-1">
                        Email Address / Username
                    </label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#7E7CF6] focus:bg-white outline-none transition-all placeholder-gray-400 text-sm"
                        placeholder="you@example.com"
                        required
                    />
                </div>

                {/* Password Field */}
                <div className="mb-8">
                    <div className="flex justify-between items-center mb-2 ml-1">
                        <label className="block text-sm font-bold text-[#05264E]">
                            Password
                        </label>
                        <a href="#" className="text-xs font-bold text-[#7E7CF6] hover:underline">Lupa Password?</a>
                    </div>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#7E7CF6] focus:bg-white outline-none transition-all placeholder-gray-400 text-sm"
                        placeholder="********"
                        required
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={loading}
                    className={`w-full bg-[#7E7CF6] hover:bg-indigo-600 text-white font-bold py-4 px-6 rounded-2xl shadow-lg shadow-indigo-100 transition duration-300 mb-6 flex justify-center items-center ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}>
                    {loading ? 'Processing...' : 'Sign In'}
                </button>

                {/* Footer Link */}
                <p className="text-center text-sm text-gray-500">
                    Belum punya akun?{' '}
                    <Link to="/register" className="text-[#7E7CF6] font-bold hover:underline">
                        Daftar Sekarang
                    </Link>
                </p>
            </form>
        </div>
    );
}