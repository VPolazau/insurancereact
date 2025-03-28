import React, { HTMLProps } from 'react';
import cn from 'classnames';

import styles from './styles.module.css';

export interface TypographyProps extends HTMLProps<HTMLDivElement> {
    variant: 'h1' | 'h2' | 'h4' | 'h3' | 'h5' | 'medium' | 'small' | 'emphasis' | 'menu' | 'menuBold';
}

export const Typography: React.FC<TypographyProps> = ({ variant, children, className, ...divProps }) => {
    const typographyClasses = cn(styles.text, styles[variant], className);

    return (
        <div className={typographyClasses} data-testid="typographyComponent" {...divProps}>
            {children}
        </div>
    );
};
