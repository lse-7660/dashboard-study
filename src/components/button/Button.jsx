'use client';

import React from 'react';
import styled from 'styled-components';

const Button = ({ children, gray, className }) => {
    return (
        <button
            className={` text-white px-8 py-1 rounded hover:bg-primary-80 ${
                gray ? 'bg-slate-500 hover:bg-slate-700' : 'bg-primary'
            } ${className}`}
        >
            {children}
        </button>
    );
};

export const ButtonIcon = ({ children, className, blind }) => {
    return (
        <button
            className={`flex justify-center items-center rounded  bg-slate-300 hover:bg-slate-500 text-black ${className}`}
        >
            {children}
            <span className="blind">{blind}</span>
        </button>
    );
};

const ButtonStyled = styled.button`
    &::before {
        content: '-';
    }
`;

export default Button;
