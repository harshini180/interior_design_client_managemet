import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import RequestQuote from "./components/RequestQuote";
import Footer from "./components/Footer";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import Signup from "./components/Signup";
import ClientDashboard from "./components/client/ClientDashboard";

const ScrollToTop = () => {
    const { pathname } = useLocation();
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    
    return null;
};

const App = () => {
    return (
        <Router>
            <ScrollToTop />
            <ToastContainer position="top-right" autoClose={2000} />
            <div className="app-container">
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    <Route path="/dashboard/client" element={<ClientDashboard />} />
                    <Route
                        path="/*"
                        element={
                            <>
                                <Header />
                                <div className="content">
                                    <Routes>
                                        <Route path="/" element={<Home />} />
                                        <Route path="/about" element={<About />} />
                                        <Route path="/services" element={<Services />} />
                                        <Route path="/contact" element={<Contact />} />
                                        <Route path="/faq" element={<FAQ />} />
                                        <Route path="/quote" element={<RequestQuote />} />
                                    </Routes>
                                </div>
                                <Footer />
                            </>
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
};

export default App;