import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { TypeAnimation } from 'react-type-animation';
import Lottie from 'lottie-react';
import typing_animation from '../../assets/typing-animationed.json';

const AboutSection = ({ scrollToSection }) => {
    AOS.init();
    const LottieComponent = Lottie.default || Lottie;

    return (
        <div className="flex flex-col md:flex-row items-stretch w-full min-h-[400px] bg-white font-sans">
            <div className="w-full md:w-1/2 flex flex-col justify-center p-12 lg:p-20">
                <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight uppercase italic text-blue-600 ">
                    <TypeAnimation
                        sequence={[
                            'GỌN GÀNG.', 1500,
                            'DỄ DÀNG.', 1500,
                            'MIỄN PHÍ.', 1500,
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                        style={{ fontSize: '2em', display: 'inline-block' }}
                    />
                </h2>

                <p
                    className="text-gray-600 text-lg leading-relaxed font-normal mb-10 max-w-xl"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                >
                    Bạn mệt mỏi với những đường link dài ngoằng, rối rắm và kém thẩm mỹ? <br className="hidden md:block mt-2" />
                    <span className="font-black text-blue-600 text-xl tracking-tighter"> Shortener </span>
                    ra đời để giúp bạn tối ưu hóa mọi liên kết. Chỉ với một cú click, biến những URL phức tạp thành các đường link <span className="underline decoration-blue-400 decoration-2 font-bold text-gray-900 italic">ngắn gọn, tinh tế và dễ dàng chia sẻ</span> trên mọi nền tảng.
                </p>
                <div>
                    <button
                        onClick={scrollToSection}
                        className="px-8 py-3 bg-gray-900 text-white rounded-full hover:bg-blue-600 transition duration-500 font-bold"
                        data-aos="fade-left" data-aos-duration="1000"
                    >
                        Trải nghiệm ngay
                    </button>
                </div>
            </div>
            <div className="w-full md:w-1/2 flex items-center justify-center">
                <LottieComponent animationData={typing_animation} loop={true} />
            </div>
        </div>
    );
};

export default AboutSection;