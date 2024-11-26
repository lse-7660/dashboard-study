'use client';

import { createContext, useContext, useState } from 'react';

// create context
const BtnContext = createContext();

// provider
export const BtnProvider = ({ children }) => {
    const [isLiked, setIsLiked] = useState(false);
    const toggleLike = () => {
        setIsLiked(!isLiked);
    };
    return <BtnContext.Provider value={(isLiked, toggleLike)}>{children}</BtnContext.Provider>;
};

// use context
export const useBtn = () => {
    const context = useContext(BtnContext);
    if (!context) {
        throw new Error('useButtonContext must be used within a ButtonProvider');
    }
    return context;
};
