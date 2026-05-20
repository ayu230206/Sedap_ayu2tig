import React from 'react';
import { Link } from 'react-router-dom';

export default function Register() {
    return (
        <div className="max-w-md mx-auto my-10 p-10 bg-white rounded-[2.5rem] shadow-xl shadow-indigo-50 border border-gray-50">
            {/* Header Section */}
            <div className="text-center mb-10">
                <h2 className="text-3xl font-extrabold text-[#05264E] mb-3">
                    Create Your Account ✨
                </h2>
                <p className="text-gray-500 text-sm">
                    Join Sedap. and start your culinary journey today.
                </p>
            </div>

            <form>
                {/* Email Field */}
                <div className="mb-6">
                    <label
                        htmlFor="email"
                        className="block text-sm font-bold text-[#05264E] mb-2 ml-1">
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#7E7CF6] focus:bg-white outline-none transition-all placeholder-gray-400 text-sm"
                        placeholder="you@example.com"
                    />
                </div>

                {/* Password Field */}
                <div className="mb-6">
                    <label
                        htmlFor="password"
                        className="block text-sm font-bold text-[#05264E] mb-2 ml-1">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#7E7CF6] focus:bg-white outline-none transition-all placeholder-gray-400 text-sm"
                        placeholder="********"
                    />
                </div>

                {/* Confirm Password Field */}
                <div className="mb-8">
                    <label
                        htmlFor="confirmPassword"
                        className="block text-sm font-bold text-[#05264E] mb-2 ml-1">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        id="confirmPassword"
                        className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#7E7CF6] focus:bg-white outline-none transition-all placeholder-gray-400 text-sm"
                        placeholder="********"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-[#7E7CF6] hover:bg-indigo-600 text-white font-bold py-4 px-6 rounded-2xl shadow-lg shadow-indigo-100 transition duration-300 mb-6">
                    Register Now
                </button>

                {/* Footer Link */}
                <p className="text-center text-sm text-gray-500">
                    Already have an account?{' '}
                    <Link to="/login" className="text-[#7E7CF6] font-bold hover:underline">
                        Sign In
                    </Link>
                </p>
            </form>
        </div>
    );
}