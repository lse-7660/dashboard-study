'use client';
import { useCounter } from '@/contexts/CounterContext';
import { ACTION_TYPE, setCount } from '@/reducers/counterReducer';
import React, { useReducer, useState } from 'react';

const ReducerPage = () => {
    // const [count, setCount] = useState(0);
    // const btnDecrease = () => {
    //     setCount(count - 1);
    // };
    // const btnIncrease = () => {
    //     setCount(count + 1);
    // };
    // 이거를 reducer로 만들어보자

    const { count, dispatch } = useCounter();

    const btnStyle = 'px-4 py-2 bg-sky-500 text-white';
    return (
        <div className="flex flex-col gap-10 px-10 py-20">
            <h2>집에 가고 싶을 때마다 누르는 버튼</h2>
            <div className="flex gap-5 items-center">
                <button
                    onClick={() => {
                        dispatch({ type: ACTION_TYPE.DECREMENT });
                    }}
                    className={btnStyle}
                >
                    -
                </button>
                <p className="px-5">
                    {count.name}:{count.counter}
                </p>
                <button
                    onClick={() => {
                        dispatch({ type: ACTION_TYPE.INCREMENT });
                    }}
                    className={btnStyle}
                >
                    +
                </button>
            </div>
            <button
                onClick={() => {
                    dispatch({ type: ACTION_TYPE.RESET });
                }}
                className="w-full py-2 bg-gray-800 text-white"
            >
                RESET
            </button>
        </div>
    );
};

export default ReducerPage;
