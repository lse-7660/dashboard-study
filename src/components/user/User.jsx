import { UserProvider, useUser } from '@/contexts/UserContext';
import React, { createContext, useContext } from 'react';

const User = () => {
    return (
        <UserProvider>
            <h2>사용자 정보</h2>

            <UserProfile />

            <hr />
            <UserProfile />
        </UserProvider>
    );
};

const UserProfile = () => {
    const { name, email, age, address } = useUser();
    return (
        <div>
            <dl>
                <dt>이름</dt>
                <dd>{name}</dd>
            </dl>
            <dl>
                <dt>이메일</dt>
                <dd>{email}</dd>
            </dl>
            <UserInfo />
        </div>
    );
};

const UserInfo = () => {
    const { age, address } = useUser();
    return (
        <div>
            <dl>
                <dt>연령</dt>
                <dd>{age}</dd>
            </dl>
            <dl>
                <dt>주소</dt>
                <dd>{address}</dd>
            </dl>
        </div>
    );
};

export default User;
