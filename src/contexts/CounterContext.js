'use client';
import { setCount } from '@/reducers/counterReducer';
import React, { createContext, useContext, useReducer } from 'react';

// reducer로 만든 카운터를 useContext로 다시 만든다!
// 만든다! 공급한다! 사용한다!

// 만든다!
const CounterContext = createContext();

// 공급한다!
{
    /* <CounterContext.Provider value={0}>{}</CounterContext.Provider>; */
}

export const CounterProvider = ({ children }) => {
    const [count, dispatch] = useReducer(setCount, {
        counter: 0,
        name: 'home',
    });

    return <CounterContext.Provider value={{ count, dispatch }}>{children}</CounterContext.Provider>;
};

// 사용한다!
export const useCounter = () => {
    const counterUseContext = useContext(CounterContext);
    return counterUseContext;
};
