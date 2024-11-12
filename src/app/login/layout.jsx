import React, { Children } from 'react';

const LoginLayout = ({ Children }) => {
    return <div id="wrap">{Children}</div>;
};

export default LoginLayout;
