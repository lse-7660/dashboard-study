import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import React from 'react';

const HomeLayout = ({ children }) => {
    return (
        <div id="wrap" className="bg-slate-100 ">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default HomeLayout;
