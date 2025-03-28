import { Button, Typography } from '../../../../components';

import styles from './styles.module.css';

type Props = {
    totalAmount: string;
};

export const TotalAmount = ({ totalAmount }: Props) => {
    return (
        <div className={styles.totalBlockWrapper}>
            <Typography variant="menu" data-testid="insuranceAmount">
                Общая сумма страхования: {totalAmount} ₽
            </Typography>
            <Button className={styles.applyButton}>Оформить заявку</Button>
        </div>
    );
};
