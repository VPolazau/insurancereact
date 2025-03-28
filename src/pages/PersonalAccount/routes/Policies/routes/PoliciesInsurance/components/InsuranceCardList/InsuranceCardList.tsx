import React from 'react';
import { Link } from 'react-router-dom';

import { Card, CardHeader, CardBody, Typography } from '../../../../../../../../components';
import { CardProps } from '../../../../../../../../components/Card';
import { StatusIcon } from '../StatusIcon';

import styles from './styles.module.css';

interface InsuranceCard extends CardProps {
    id: string;
    property: string;
    type: string;
    address: string;
    policyNumber: string;
    policyValidity: string;
    policyCost: string;
    paymentAmount: string;
    paymentFrequency: string;
}

export interface InsuranceCardListProps {
    cards: InsuranceCard[];
}

export const InsuranceCardList: React.FC<InsuranceCardListProps> = ({ cards }) => {
    return (
        <div className={styles.insuranceCardList} data-testid="insuranceCardList">
            {cards.map((card) => {
                const {
                    id,
                    property,
                    type,
                    address,
                    policyNumber,
                    policyValidity,
                    policyCost,
                    paymentAmount,
                    paymentFrequency,
                    ...rest
                } = card;
                return (
                    <Link key={id} to="property" state={card}>
                        <Card className={styles.insuranceCard} {...rest}>
                            <CardHeader className={styles.insuranceCardHeader}>
                                <Typography variant="h3">{type}</Typography>
                                <Typography variant="medium">Перейти к полису</Typography>
                            </CardHeader>
                            <CardBody className={styles.insuranceCardBody}>
                                <ul>
                                    <li>
                                        <Typography variant="emphasis">{property}</Typography>
                                        <Typography variant="medium">{address}</Typography>
                                    </li>
                                    <li>
                                        <ul>
                                            <li>
                                                <Typography variant="emphasis" className={styles.titlePoliceNumber}>
                                                    Номер полиса
                                                </Typography>
                                                <Typography variant="small">{policyNumber}</Typography>
                                            </li>
                                            <li>
                                                <Typography variant="emphasis" className={styles.statusIconBox}>
                                                    Срок действия
                                                    <StatusIcon
                                                        status="success"
                                                        toDate={new Date()}
                                                        fromDate={new Date()}
                                                    />
                                                </Typography>
                                                <Typography variant="small">{policyValidity}</Typography>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <ul>
                                            <li>
                                                <Typography variant="emphasis">Стоимость полиса</Typography>
                                                <Typography variant="medium">{policyCost}</Typography>
                                            </li>
                                            <li>
                                                <Typography variant="emphasis">Сумма взноса</Typography>
                                                <Typography variant="medium">{paymentAmount}</Typography>
                                            </li>
                                            <li>
                                                <Typography variant="emphasis">Периодичность платежа</Typography>
                                                <Typography variant="medium">{paymentFrequency}</Typography>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </CardBody>
                        </Card>
                    </Link>
                );
            })}
        </div>
    );
};
