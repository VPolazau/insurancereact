import React from 'react';

import { createSvgIcon } from '../../utils/createSvgIcon';

//Если хотите изменить или установить цвет, нужно использовать stroke: black; вместо color: black;
//If you want change or set color, you need to use stroke: black; instead color: black;
export default createSvgIcon(
    <>
        <path
            d="M30 29V27C30 25.9391 29.5786 24.9217 28.8284 24.1716C28.0783 23.4214 27.0609 23 26 23H18C16.9391 23 15.9217 23.4214 15.1716 24.1716C14.4214 24.9217 14 25.9391 14 27V29"
            // stroke="#1F1D1D"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
        />

        <path
            d="M22 19C24.2091 19 26 17.2091 26 15C26 12.7909 24.2091 11 22 11C19.7909 11 18 12.7909 18 15C18 17.2091 19.7909 19 22 19Z"
            // stroke="#1F1D1D"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
        />
    </>
);
