import React from 'react';

import cn from 'classnames';

import styles from './styles.module.css';

interface ISvgIconProps extends React.SVGProps<SVGSVGElement> {
    titleAccess?: string;
}

export const SvgIcon: React.FC<ISvgIconProps> = (props) => {
    const { titleAccess, className, viewBox = '0 0 24 24', ...passProps } = props;

    return (
        <svg
            className={cn(styles.upIconSvg, className)}
            focusable={false}
            viewBox={viewBox}
            aria-hidden={titleAccess ? undefined : true}
            role={titleAccess ? 'img' : undefined}
            fill="currentColor"
            {...passProps}
        >
            {props.children}
            {titleAccess ? <title>{titleAccess}</title> : null}
        </svg>
    );
};
