import React, { useEffect, useState } from 'react';

import { Card, CardHeader, CardBody, Typography } from '../../../../../../../../components';
import { RequestItem, IRequest } from '../RequestItem';

import styles from './styles.module.css';

export interface IRequestCardListProps {
    requests: IRequest[];
}

export const RequestCardList: React.FC<IRequestCardListProps> = ({ requests }) => {
    const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);

    const handleDotsClick = (index: number) => {
        if (openMenuIndex === index) {
            setOpenMenuIndex(null);
        } else {
            setOpenMenuIndex(index);
        }
    };

    const handleClickOutside = (event: MouseEvent) => {
        const clickedElement = event.target as HTMLElement;

        if (clickedElement && clickedElement.id !== 'menu' && !clickedElement.closest('svg')?.id.startsWith('dots-')) {
            setOpenMenuIndex(null);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className={styles.requestContainer}>
            <Card className={styles.requestCard}>
                <CardHeader className={styles.requestCardHeader}>
                    <Typography variant="h3">Тип заявки</Typography>
                    <Typography variant="h3">Создан</Typography>
                    <Typography variant="h3">Срок рассмотрения</Typography>
                    <Typography variant="h3">Статус</Typography>
                </CardHeader>
                <CardBody className={styles.requestCardBody}>
                    <ul className={styles.requestList}>
                        {requests.map((request, index) => {
                            const isMenuOpen = openMenuIndex === index;

                            return (
                                <RequestItem
                                    key={request.id}
                                    request={request}
                                    isOpen={isMenuOpen}
                                    onClose={() => setOpenMenuIndex(null)}
                                    onDotsClick={() => handleDotsClick(index)}
                                />
                            );
                        })}
                    </ul>
                </CardBody>
            </Card>
        </div>
    );
};
