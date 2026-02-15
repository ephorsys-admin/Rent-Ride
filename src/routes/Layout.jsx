import React from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { ToastContainer } from 'react-toastify';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import 'react-toastify/dist/ReactToastify.css';
import LenisProvider from '../shared/providers/LenisProvider'
import ScrollToTop from '../shared/core/ScrollToTop';
import WhatsAppFloating from '../helpers/WhatsAppFloating';
import ScrollToTopButton from '../shared/providers/ScrollToTopButton';


function Layout() {
    const content = (
        <>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                style={{ zIndex: 999999 }}
            />
            <HelmetProvider>
                <ScrollToTop />
                <Navbar isOther={true} />
                <main className='min-h-[100vh] overflow-x-hidden'>
                    <Outlet />
                </main>
                <Footer />
                <ScrollToTopButton />
                <WhatsAppFloating />
            </HelmetProvider>
        </>
    );

    return  <LenisProvider>{content}</LenisProvider>;
}

export default Layout
