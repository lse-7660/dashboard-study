'use client';
import React, { useEffect, useState } from 'react';

const EffectPage = () => {
    const [color, setColor] = useState('white');
    const [number, setNumber] = useState(0);
    const [time, setTime] = useState(0);
    const [isShow, setIsShow] = useState(true);

    // 마운트 시에만 실행
    useEffect(() => {
        console.log('마운트 시에만 실행');
    }, []);

    // 마운트 시와 업데이트 시에 실행
    useEffect(() => {
        console.log('V-마운트 시와 업데이트 시에 실행');
    });

    // 업데이트 시에만 제어하고싶어!!: 의존성 배열 안쪽 특정한 상태 전달
    // 업데이트: 특정 상태값이 변경될 때
    useEffect(() => {
        console.log('업데이트 시에 실행');

        return () => {
            console.log('언마운트시에만 실행');
        };
    }, [number]);

    // --------------------Timer-------------------
    // setInterval을 사용하여 1초마다 타이머의 상태값 변경
    useEffect(() => {
        let interval;
        if (isShow) {
            interval = setInterval(() => {
                setTime((prev) => prev + 1);
            }, 1000);
        }

        return () => {
            clearInterval(interval);
            setTime(0);
        };
    }, [isShow]);

    return (
        <div className="flex flex-col gap-20 p-20">
            <h1>useEffect / Life circle</h1>

            <div>
                <h1>Timer</h1>
                {isShow ? (
                    <>
                        <div>{time}</div>
                        <button
                            onClick={() => {
                                setIsShow(false);
                            }}
                        >
                            타이머 숨기기
                        </button>
                    </>
                ) : (
                    <button
                        onClick={() => {
                            setIsShow(true);
                        }}
                    >
                        타이머 보이기
                    </button>
                )}

                <br />
            </div>

            <div>
                <h1>counter</h1>
                <div>{number}</div>
                <button
                    onClick={() => {
                        setNumber(number + 1);
                    }}
                    className="w-10 h-10 bg-gray-500"
                >
                    +
                </button>
            </div>

            <button
                onClick={() => {
                    setColor('white');
                }}
                className="py-2 px-6 rounded bg-gray-900 text-white "
            >
                색상 변경
            </button>
        </div>
    );
};

export default EffectPage;
