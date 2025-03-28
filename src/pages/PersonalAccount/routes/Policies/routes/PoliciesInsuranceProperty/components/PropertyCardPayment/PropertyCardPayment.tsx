import { CardBody, Typography, Card, CardHeader } from '../../../../../../../../components';

import styles from './styles.module.css';

export const PropertyCardPayment = () => {
    const mockData = {
        id: '1',
        companyName: 'СПАО «My Insurance»',
        checkingAccount: '40704917073289876529 ',
        BIC: '011111111',
        TIN: '7711111111',
    };
    return (
        <div>
            <Card>
                <CardHeader>
                    <Typography variant="h3">Реквизиты для оплаты</Typography>
                </CardHeader>
                <CardBody>
                    <ul className={styles.list}>
                        <li>
                            <Typography variant="emphasis">Название компании</Typography>
                            <Typography variant="medium">{mockData.companyName}</Typography>
                        </li>
                        <li>
                            <Typography variant="emphasis">Расчетный счёт</Typography>
                            <Typography variant="medium">{mockData.checkingAccount}</Typography>
                        </li>
                        <li>
                            <Typography variant="emphasis">БИК</Typography>
                            <Typography variant="medium">{mockData.BIC}</Typography>
                        </li>
                        <li>
                            <Typography variant="emphasis">ИНН</Typography>
                            <Typography variant="medium">{mockData.TIN}</Typography>
                        </li>
                    </ul>
                </CardBody>
            </Card>
        </div>
    );
};
