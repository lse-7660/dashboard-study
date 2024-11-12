import React from 'react';
import Image from 'next/image';

const flagImage = ({ country }) => {
    return <Image src={`/image/${country}.png`} alt={country} width="100" height="100" />;
};

export default flagImage;
