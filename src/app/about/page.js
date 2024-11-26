'use client';

import User from '@/components/user/User';
import { useBtn } from '@/contexts/BtnContext';
import { Heart } from 'lucide-react';
import React from 'react';

const AboutPage = () => {
    const { isLiked, toggleLike } = useBtn();
    return (
        <div>
            <button onClick={toggleLike}>
                <Heart color="gray" fill={isLiked ? 'red' : 'white'} strokeWidth={isLiked ? 0 : 2} />
            </button>
            <User />
        </div>
    );
};

export default AboutPage;
