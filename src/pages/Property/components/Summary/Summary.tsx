import { Card, Typography } from '../../../../components';

import styles from './styles.module.css';

type Props = {
    total: string;
    periodAmount: string;
    period: string;
    insuranceAmount: string;
};

const Summary = ({ total, periodAmount, period, insuranceAmount }: Props) => {
    return (
        <Card className={styles.summaryInfoBlock}>
            <div className={styles.summaryInfoItem}>
                <Typography variant="emphasis" data-testid="summaryInsuranceLabel">
                    Страховая сумма
                </Typography>
                <Typography variant="medium" data-testid="summaryInsuranceAmount">
                    {total} ₽
                </Typography>
            </div>
            <div className={styles.summaryInfoItem}>
                <Typography variant="emphasis" data-testid="summaryPeriodLabel">
                    Периодичность оплаты
                </Typography>
                <Typography variant="medium" data-testid="summaryPeriodAmount">
                    {periodAmount} ₽ {period.toLowerCase()}
                </Typography>
            </div>
            <div className={styles.summaryInfoItem}>
                <Typography variant="h3" data-testid="summaryTotalLabel">
                    Итоговая сумма полиса
                </Typography>
                <Typography variant="medium" data-testid="summaryTotalAmount">
                    {insuranceAmount} ₽
                </Typography>
            </div>
        </Card>
    );
};

export default Summary;
