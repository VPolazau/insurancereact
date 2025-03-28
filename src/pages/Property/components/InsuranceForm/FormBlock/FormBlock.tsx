import { ReactNode } from 'react';
import classNames from 'classnames';

import { Typography } from '../../../../../components';

import cl from './FormBlock.module.scss';

interface FormBlockProps {
    title: string;
    children: ReactNode;
    className?: string;
}
export const FormBlock = ({ title, children, className = '' }: FormBlockProps) => {
    return (
        <section className={classNames(cl.container, className)}>
            <Typography variant="medium" className={cl.title}>
                {title}
            </Typography>
            <div className={cl.wrapper}>{children}</div>
        </section>
    );
};
