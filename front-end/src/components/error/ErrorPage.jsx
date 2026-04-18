import React from 'react';
import { Link } from 'react-router-dom';

function ErrorPage({ statusCode = '404', message = 'Ôi không! Trang bạn đang tìm kiếm không tồn tại.' }) {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
            <div className="text-center w-full max-w-xl">

                <h1 className="text-[6rem] md:text-[9rem] font-bold text-indigo-600 leading-none">
                    {statusCode}
                </h1>

                <p className="text-xl md:text-2xl font-bold text-gray-800 mt-4">
                    {message}
                </p>

                <p className="text-gray-500 mt-2 mb-8">
                    Vui lòng kiểm tra lại URL hoặc quay về trang chủ để tiếp tục.
                </p>

                <Link
                    to="/"
                    className="inline-block w-full md:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300"
                >
                    Quay về Trang chủ
                </Link>

            </div>
        </div>
    );
}

export default ErrorPage;