import React from 'react';
import MiniState from './ministate';
import { BsFillBarChartFill } from 'react-icons/bs';
import { BiDollar } from 'react-icons/bi';
import statData from '@/data/state';

const MiniStateGrid = () => {
    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2  lg:grid-cols-6">
            {statData.map((item, index) => (
                <MiniState
                    key={index}
                    {...item}
                    // name={item.name}
                    // value={item.value}
                    // startContent={item.startContent}
                    // endContent={item.endContent}
                    // growth={item.growth}
                />
            ))}
        </div>
    );
};

export default MiniStateGrid;
