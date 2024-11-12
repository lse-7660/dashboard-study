import React, { Children } from 'react';

const IconBox = ({ children, className }) => {
    return (
        <div className={`flex justify-center items-center w-14 h-14  rounded-full bg-slate-100  ${className}`}>
            {children}
        </div>
    );
};

export default IconBox;
