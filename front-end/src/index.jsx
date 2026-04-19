import Intro from "./components/effect/Intro";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Home from "./pages/Home";
import { Outlet } from "react-router-dom";

const LayoutWebsite = () => {
    return (
        <div>
            <Intro />
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

export default LayoutWebsite;