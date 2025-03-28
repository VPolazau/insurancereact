import { Card, Typography } from '../../../../components';
import { INITIAL } from '../../const/const';
import { Roller } from '../Roller';

import styles from './styles.module.css';

type Props = {
    amount: number;
    amountText: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Immovable = ({ amount, amountText, onChange }: Props) => {
    return (
        <Card className={styles.cardInsurance}>
            <Typography variant="h3" data-testid="immovableHeader">
                Выберите страховую сумму по недвижимому имуществу
            </Typography>
            <Typography variant="small" data-testid="immovableTitle">
                Страховая сумма
            </Typography>
            <Typography variant="medium" data-testid="immovableValue">
                {amountText} ₽
            </Typography>
            <Roller {...INITIAL.IMMOVABLE_RANGE} value={amount} onChange={onChange} />
        </Card>
    );
};

export default Immovable;
