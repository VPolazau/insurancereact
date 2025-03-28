import { Card, Typography } from '../../../../components';
import { INITIAL, OPTIONS_MOVABLE } from '../../const/const';
import { RadioBtnCustomGroup } from '../RadioBtnCustomGroup';
import { Roller } from '../Roller';

import Helper from '../../../../assets/icons/helper';

import styles from './styles.module.css';

type Props = {
    amount: number;
    amountText: string;
    isCountMovable: boolean;
    onSwitch: (value: string) => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Movable = ({ amount, amountText, isCountMovable, onSwitch, onChange }: Props) => {
    return (
        <Card className={styles.cardInsurance}>
            <div className={styles.movableHeaderBlock}>
                <Typography variant="h3" data-testid="movableHeader">
                    Страхуете движимое имущество?
                </Typography>
                <div className={styles.helperImgWrapper}>
                    <Helper className={styles.helperImg} />
                </div>
            </div>

            <RadioBtnCustomGroup options={OPTIONS_MOVABLE} groupName="movable" selected="off" onChange={onSwitch} />
            {isCountMovable && (
                <>
                    <Typography variant="small" data-testid="movableTitle">
                        Страховая сумма
                    </Typography>
                    <Typography variant="medium" data-testid="movableValue">
                        {amountText} ₽
                    </Typography>
                    <Roller {...INITIAL.MOVABLE_RANGE} value={amount} onChange={onChange} />
                </>
            )}
        </Card>
    );
};

export default Movable;
