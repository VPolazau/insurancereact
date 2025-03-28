import React from 'react';

import { createSvgIcon } from '../../utils/createSvgIcon';

//Если хотите изменить или установить цвет, нужно использовать stroke: black; вместо color: black;
//If you want change or set color, you need to use stroke: black; instead color: black;

export default createSvgIcon(
    <path d="M1 1L7 7L13 1" /*stroke="#1F1D1D"*/ strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
);
