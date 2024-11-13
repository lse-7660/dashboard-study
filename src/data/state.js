import { BiDollar } from 'react-icons/bi';
import { BsFillBarChartFill } from 'react-icons/bs';
import FlagImage from '@/components/icon/FlagImage';

const stateData = [
    {
        name: 'earnings',
        value: '$350.4',
        startContent: <BsFillBarChartFill />,
    },
    {
        name: 'spend this month',
        value: '$642.39',
        startContent: <BiDollar />,
    },
    { name: 'Sales', value: '$574.34', growth: '23.5%' },
    {
        name: 'Your balance',
        value: '$1,000',
        endContent: <FlagImage country="usa" />,
    },
    {
        name: 'New Tasks',
        value: '154',
    },
    {
        name: 'Total Projects',
        value: '2935',
    },
];

export default stateData;
