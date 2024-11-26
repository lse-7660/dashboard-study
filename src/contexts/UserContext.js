// 생성

import { userData } from '@/data/userData';
import { createContext, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    return <UserContext.Provider value={userData}>{children}</UserContext.Provider>;
};

export const useUser = () => {
    return useContext(UserContext);
};
