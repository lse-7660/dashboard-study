import React from 'react';
import { ButtonIcon } from '../button/Button';
import { MdMoreHoriz } from 'react-icons/md';

const Title = ({ title, icon }) => {
    return (
        <header className="flex flex-row justify-between items-center w-full">
            <h2>{title}</h2>
            <ButtonIcon blind="옵션 보기" className="w-9 h-9">
                <MdMoreHoriz />
            </ButtonIcon>
        </header>
    );
};

export default Title;
