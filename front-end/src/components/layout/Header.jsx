import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { isAuthenticated, logout } = useAuth();
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="bg-white shadow-md relative z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="text-2xl font-bold text-indigo-600 uppercase">
                            Shortener
                        </Link>
                    </div>
                    <nav className="hidden md:flex space-x-8 font-semibold">
                        <Link to="/" className="text-gray-700 hover:text-indigo-600 transition duration-300">Trang chủ</Link>
                        <Link to="/history" className="text-gray-700 hover:text-indigo-600 transition duration-300">Dự án</Link>
                        <Link to="/contact" className="text-gray-700 hover:text-indigo-600 transition duration-300">Liên hệ</Link>
                        <Link to="/cooperate" className=" hover:text-indigo-600 transition duration-300">Hợp tác với chúng tôi</Link>
                        {isAuthenticated
                            ? (<Link className="text-gray-700 transition duration-300 hover:text-red-500" onClick={logout}>Đăng xuất</Link>)
                            : (<Link to="/login" className="text-gray-700 hover:text-indigo-600 transition duration-300">Đăng nhập</Link>)
                        }
                    </nav>
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMobileMenu}
                            className="text-gray-700 hover:text-indigo-600 focus:outline-none"
                        >
                            {isMobileMenuOpen ? (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 md:hidden z-40 
                    ${isMobileMenuOpen ? 'opacity-50 visible' : 'opacity-0 invisible'}`}
                onClick={toggleMobileMenu}
            >
            </div>
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 md:hidden 
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <div className="p-4 border-b border-gray-100 flex justify-between items-center">
                    <span className="text-xl font-bold text-indigo-600">Bạn cần gì ?</span>
                    <button onClick={toggleMobileMenu} className="text-gray-500 hover:text-red-500">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <nav className="flex flex-col p-4 space-y-4">
                    <Link to="/" onClick={toggleMobileMenu} className="block text-gray-700 hover:text-indigo-600 font-medium">Trang chủ</Link>
                    <Link to="/history" onClick={toggleMobileMenu} className="block text-gray-700 hover:text-indigo-600 font-medium">Dự án</Link>
                    <Link to="/contact" onClick={toggleMobileMenu} className="block text-gray-700 hover:text-indigo-600 font-medium">Liên hệ</Link>
                    <Link to="/cooperate" onClick={toggleMobileMenu} className="block text-gray-700 hover:text-indigo-600 font-medium">Hợp tác với chúng tôi</Link>
                    {isAuthenticated
                        ? (<Link onClick={() => { logout(); toggleMobileMenu() }} className="block text-red-500 font-medium">Đăng xuất</Link>)
                        : (<Link to="/login" onClick={toggleMobileMenu} className="block text-gray-700 hover:text-indigo-600 font-medium">Đăng nhập</Link>)}
                </nav>
            </div>
        </header>
    );
}

export default Header;