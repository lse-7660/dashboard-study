'use client';
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { IoTicketOutline } from 'react-icons/io5';
import { MdHouseSiding } from 'react-icons/md';
import { RiLandscapeLine } from 'react-icons/ri';
import { FaUmbrellaBeach } from 'react-icons/fa';

const StatePage = () => {
    // change name
    const [name, setName] = useState('Rucker');

    function changeName() {
        setName(name === 'Rucker' ? 'Lucid' : 'Rucker');
    }

    // counter
    const [number, setNumber] = useState(0);
    function decrease() {
        setNumber(number - 1);
    }
    function increase() {
        setNumber(number + 1);
    }

    // icon button
    const [isOpen, setIsOpen] = useState(false);

    // airbnb
    const sortNav = [
        { value: '컬처 아이콘', icon: <IoTicketOutline size={26} /> },
        { value: '통나무집', icon: <MdHouseSiding size={26} /> },
        { value: '최고의 전망', icon: <RiLandscapeLine size={26} /> },
        { value: '해변 바로 앞', icon: <FaUmbrellaBeach size={26} /> },
    ];

    const [selected, setSelected] = useState(0);

    return (
        <div className="m-10">
            {/* change name */}
            <h2>useState</h2>
            <strong>{name}</strong>
            <br />
            <button className="py-2 px-6 rounded bg-primary text-white" onClick={changeName}>
                이름 변경
            </button>
            <br />
            {/* counter */}
            <button className="bg-primary w-10 h-10 rounded" onClick={decrease}>
                -
            </button>
            <strong>{number}</strong>
            <button className="bg-primary w-10 h-10 rounded" onClick={increase}>
                +
            </button>
            <br />

            <button
                onClick={() => {
                    setIsOpen(!isOpen);
                }}
            >
                {isOpen ? <IoMdClose /> : <FaBars />}
            </button>

            {/* Selected */}
            {/* airbnb */}
            <div>
                <div>
                    {/* tab */}
                    <div className="flex flex-row gap-5">
                        {sortNav.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setSelected(index);
                                }}
                                className={`flex flex-col items-center gap-1 py-1 ${
                                    selected === index ? 'border-b-4 border-primary' : ''
                                }`}
                            >
                                {item.icon}
                                {item.value}
                            </button>
                        ))}
                    </div>
                    {/* content */}
                    <div>
                        {sortNav.map((item, index) => (
                            <div key={index} className={`w-full pt-8  ${selected === index ? 'block' : 'hidden'}`}>
                                {item.value}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatePage;
