import Card from '@/components/card/Card';
import FlagImage from '@/components/icon/FlagImage';
import React from 'react';
import Image from 'next/image';
import { BsFillBarChartFill } from 'react-icons/bs';
import IconBox from '@/components/icon/IconBox';

const MiniState = ({
    name,
    value,
    startContent,
    endContent,
    growth,
}) => {
    return (
        <Card>
            <div className="flex items-center justify-between w-full">
                <div className="flex flex-row gap-5 item-center">
                    {/* 아이콘 */}

                    {/* && 연산자 사용하여 startContent가 참일 경우에만 보이게 함  */}
                    {startContent && (
                        <IconBox className="text-primary">
                            {startContent}
                        </IconBox>
                    )}

                    {/* 텍스트 박스 */}

                    <div>
                        <span className="text-slate-400 text-sm">
                            {name}
                        </span>
                        <strong className="block text-slate-900 text-2xl">
                            {value}
                        </strong>

                        {/* growth */}

                        {growth && (
                            <div>
                                <span className="text-secondary text-sm">
                                    {growth}
                                </span>
                                <span className="text-slate-400 text-xs">
                                    Since last month
                                </span>
                            </div>
                        )}
                    </div>
                </div>

                {/* 국기 */}

                {endContent && (
                    <div className="w-14 h-14 rounded-full">
                        {endContent}
                    </div>
                )}
            </div>
        </Card>
    );
};

export default MiniState;
