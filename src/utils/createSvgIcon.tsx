import React from 'react';

import { SvgIcon } from '../components/SvgIcon';

export interface ISvgIconProps extends React.SVGProps<SVGSVGElement> {
    titleAccess?: string;
}
export const createSvgIcon = (content: React.ReactNode, viewBox?: string): React.FC<ISvgIconProps> => {
    return function (props) {
        return (
            <SvgIcon viewBox={viewBox} {...props}>
                {content}
            </SvgIcon>
        );
    };
};
