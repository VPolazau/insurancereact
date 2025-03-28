import React from 'react';

import { createSvgIcon } from '../../utils/createSvgIcon';

//Если хотите изменить или установить цвет, нужно использовать stroke: black; вместо color: black;
//If you want change or set color, you need to use stroke: black; instead color: black;
export default createSvgIcon(
    <>
        <path d="M18 6L6 18" /*stroke="#1F1D1D"*/ strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 6L18 18" /*stroke="#1F1D1D"*/ strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </>
);
