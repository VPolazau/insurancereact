import { Card, Typography } from '../../../../components';
import { OPTIONS_PERIOD } from '../../const/const';
import { RadioBtnCustomGroup } from '../RadioBtnCustomGroup';

import styles from './styles.module.css';

type Props = {
    onChange: (value: string) => void;
};

const Period = ({ onChange }: Props) => {
    return (
        <Card className={styles.cardInsurance}>
            <Typography variant="h3" data-testid="periodHeader">
                Периодчиность оплаты
            </Typography>

            <RadioBtnCustomGroup
                options={OPTIONS_PERIOD}
                groupName="frequency"
                selected={OPTIONS_PERIOD[3].value}
                className={styles.cardGroup}
                pointer={true}
                onChange={onChange}
            />
        </Card>
    );
};

export default Period;
