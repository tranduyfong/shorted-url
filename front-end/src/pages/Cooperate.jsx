import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import comming_soom from '../assets/coming-soon.json';

const Cooperate = () => {
    const LottieComponent = Lottie.default || Lottie;
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
            <div className="text-center w-full max-w-xl">
                <LottieComponent animationData={comming_soom} loop={true} />
                <p className="text-xl md:text-2xl font-bold text-gray-800 mt-4">
                    Chúng tôi đang phát triển tính năng
                </p>
                <p className="text-gray-500 mt-2 mb-8">
                    Cảm ơn bạn đã tin tưởng dịch vụ, hẹn gặp lại !
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

export default Cooperate;