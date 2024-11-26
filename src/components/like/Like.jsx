'use client';

import React from 'react';
import { Heart } from 'lucide-react';
import { useBtn } from '@/contexts/BtnContext';

const BtnLike = () => {
    // 사용
    const { isLiked, toggleLike } = useBtn();

    return (
        <button onClick={toggleLike}>
            <Heart color="gray" fill={isLiked ? 'red' : 'white'} strokeWidth={isLiked ? 0 : 2} />
        </button>
    );
};

const BtnFollow = () => {
    const { isLiked, toggleLike } = useBtn();
    return (
        <button onClick={toggleLike} className={`py-1 px-5 bg-${isLiked ? 'gray-200' : 'gray-800 text-white'}`}>
            {isLiked ? '팔로잉' : '팔로우'}
        </button>
    );
};

const Like = () => {
    return (
        // providing context
        <>
            <BtnLike />
            <br />
            <BtnFollow />
        </>
    );
};

export default Like;
