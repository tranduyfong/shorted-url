import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-100 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    <div className="flex flex-col space-y-4">
                        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">
                            Chính sách phát triển
                        </h3>
                        <nav className="flex flex-col space-y-3">
                            <a href="#" className="text-gray-500 hover:text-indigo-600 hover:translate-x-1 transition-all duration-300">
                                Điều khoản dịch vụ
                            </a>
                            <a href="#" className="text-gray-500 hover:text-indigo-600 hover:translate-x-1 transition-all duration-300">
                                Chính sách bảo mật
                            </a>
                            <a href="#" className="text-gray-500 hover:text-indigo-600 hover:translate-x-1 transition-all duration-300">
                                Quy định sử dụng
                            </a>
                        </nav>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">
                            Liên hệ
                        </h3>
                        <ul className="flex flex-col space-y-3 text-gray-500">
                            <li>
                                <span className="font-medium text-gray-700">Email:</span> support@shortener.com
                            </li>
                            <li>
                                <span className="font-medium text-gray-700">Hotline:</span> 0123 456 789
                            </li>
                            <li>
                                <span className="font-medium text-gray-700">Địa chỉ:</span> Bắc Từ Liêm, Hà Nội
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col space-y-4">
                        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">
                            Kết nối với chúng tôi
                        </h3>
                        <p className="text-gray-500 text-sm">
                            Theo dõi Shortener trên các nền tảng để cập nhật tính năng mới nhất.
                        </p>
                        <div className="flex space-x-5 mt-2">
                            <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors duration-300">
                                <span className="sr-only">Facebook</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors duration-300">
                                <span className="sr-only">GitHub</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm">
                        &copy; {new Date().getFullYear()} Shortener App. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;