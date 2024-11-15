'use client';

import Card from '@/components/card/Card';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import React from 'react';
import { BsFillBarChartFill } from 'react-icons/bs';
import MiniState from './components/ministate';
import MiniStateGrid from './components/MiniStateGrid';
import IconBox from '@/components/icon/IconBox';
import Button from '@/components/button/Button';
import CheckTable from './components/CheckTable';
import { tableDataCheck } from '@/data/tableDataCheck';

const HomePage = () => {
    return (
        <div id="wrap" className="flex gap-12 bg-slate-100">
            <Header />
            <main className="inner flex flex-col gap-12">
                <MiniStateGrid />
                <button
                    className="bg-slate-800 text-white py-2 rounded hover:bg-primary"
                    onClick={(event) => {
                        console.log('응 못 가');
                        console.log(event);
                    }}
                >
                    집에 가고 싶을 때마다 누르는 버튼
                </button>
                <div className="flex flex-row gap-4">
                    <Button> 하.....</Button>
                    <Button gray>인생</Button>
                </div>

                <div className="flex flex-col gap-4 lg:flex-row">
                    <div className=" grow">
                        <CheckTable tableDataCheck={tableDataCheck} />
                    </div>
                    <div className="flex flex-col gap-4 md:flex-row  grow">
                        <div className="bg-secondary grow">g</div>
                        <div className="bg-primary grow">g</div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;
