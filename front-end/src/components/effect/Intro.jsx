import Lottie from 'lottie-react';
import URL from '../../assets/URL.json';
import { useEffect, useState } from "react";

const Intro = () => {
    const LottieComponent = Lottie.default || Lottie;
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div
                className={`fixed inset-0 bg-white z-9999 flex justify-center items-center transition-all duration-500 ease-in-out ${isLoading ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
            >
                <div className="w-84 md:w-100">
                    <LottieComponent animationData={URL} loop={true} />
                </div>
            </div>
        </>
    )
}

export default Intro;