import React from 'react';
import cn from 'classnames';

import { StatusIconSuccess, StatusIconError, StatusIconWarning } from '../../../../../../../../assets/icons';
import { formatDate } from '../../../../../../../../utils/helpers/date';

import styles from './styles.module.css';

interface IStatusIconError {
    status: 'error';
    className?: string;
    count: number;
}

interface IStatusIconWarning {
    status: 'warning';
    className?: string;
}

interface IStatusIconSuccess {
    status: 'success';
    className?: string;
    fromDate: Date;
    toDate: Date;
}

type IStatusIcon = IStatusIconError | IStatusIconWarning | IStatusIconSuccess;

export const StatusIcon: React.FC<IStatusIcon> = (props) => {
    const { status } = props;
    let attribute;
    let styleTitle;
    if (status === 'error') {
        attribute = `Осталось ${props.count} дней`;
        styleTitle = styles.errorTitle;
    }
    if (status === 'warning') {
        attribute = 'Продление полиса находится на рассмотрении';
        styleTitle = styles.warningTitle;
    }
    if (status === 'success') {
        attribute = `Полис продлён c ${formatDate(props.fromDate, 'DD.MM.YYYY')} по ${formatDate(
            props.toDate,
            'DD.MM.YYYY'
        )}`;
        styleTitle = styles.successTitle;
    }
    return (
        <div className={cn(styles.statusIcon, styleTitle, styles.className)} data-title={attribute}>
            {status === 'error' && <StatusIconError />}
            {status === 'warning' && <StatusIconWarning />}
            {status === 'success' && <StatusIconSuccess />}
        </div>
    );
};
