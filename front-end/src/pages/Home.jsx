import React, { useState, useRef } from 'react';
import { message } from 'antd';
import UrlForm from '../components/home/UrlForm';
import UrlTable from '../components/home/UrlTable';
import { shortenUrlAPI } from '../services/url.service';
import AboutSection from '../components/home/banner.section';

const Home = () => {
    const [urlList, setUrlList] = useState([]);
    const aboutSectionRef = useRef(null);

    const scrollToSection = () => {
        aboutSectionRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

    const handleCreateUrl = async (link) => {
        try {
            const response = await shortenUrlAPI(link);
            const newRecord = {
                id: Date.now().toString(),
                urlBefore: link,
                urlAfter: response.data,
            };

            setUrlList((prev) => [newRecord, ...prev]);
            message.success('Rút gọn link thành công!');

        } catch (error) {
            message.error(error.message || 'Có lỗi xảy ra khi tạo link!');
        }
    };

    return (
        <div className="min-h-screen py-10 px-4 md:px-0">
            <AboutSection scrollToSection={scrollToSection} />
            <div className="max-w-4xl mx-auto mt-50" ref={aboutSectionRef}>
                <div className="text-center mb-8" data-aos="fade-up">
                    <h1 className="text-4xl font-extrabold text-blue-600">Shortener</h1>
                    <p className="text-gray-500 mt-2">Công cụ rút gọn URL nhanh chóng và tiện lợi</p>
                </div>

                <UrlForm onUrlCreated={handleCreateUrl} />

                {urlList.length > 0 ? (
                    <UrlTable data={urlList} />
                ) : (
                    <div className="text-center text-gray-400 mt-10">
                        Chưa có link nào được tạo trong phiên này.
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;