import React from 'react';
import cn from 'classnames';

import { InfoCard } from '../InfoCard';
import { Typography } from '../../../../components';
import { CARDS } from '../../../../utils/constants';
import { decodeHtmlEntities } from '../../../../utils/utilities';

import styles from './styles.module.css';

export interface IInfoCardList {
    className?: string;
}

export const InfoCardList: React.FC<IInfoCardList> = ({ className }) => {
    return (
        <div className={cn(styles.infoCardListBasic, className)} data-testid="infoCardList">
            <Typography variant="h2">Наши преимущества</Typography>
            <div className={styles.cardListWrapper}>
                {CARDS.map((card, index) => (
                    <InfoCard key={index}>
                        <>
                            <Typography variant="h3">{card.title}</Typography>
                            <Typography variant="medium">{decodeHtmlEntities(card.description)}</Typography>
                        </>
                    </InfoCard>
                ))}
            </div>
        </div>
    );
};
