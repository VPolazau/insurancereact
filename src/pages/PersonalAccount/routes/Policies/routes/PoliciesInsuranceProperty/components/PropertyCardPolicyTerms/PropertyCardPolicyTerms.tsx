import { CardBody, Typography, Card, CardHeader } from '../../../../../../../../components';

import styles from './styles.module.css';

export const PropertyCardPolicyTerms = () => {
    const mockData = {
        id: '1',
        date: '01.12.2022',
        policyContract: 'GO3456789 ',
        personalProperty: 'Включено',
        policyValidity: '01.01.2023-01.01.2024',
        sumInsured: '100 000 ₽',
        policyCost: '17 000 ₽',
        paymentAmount: '8 500 ₽',
        paymentFrequency: 'Раз в 6 месяцев',
    };
    return (
        <div>
            <Card>
                <CardHeader>
                    <Typography variant="h3">Условия полиса</Typography>
                </CardHeader>
                <CardBody>
                    <ul className={styles.list}>
                        <li>
                            <Typography variant="emphasis">Дата договора</Typography>
                            <Typography variant="medium">{mockData.date}</Typography>
                        </li>
                        <li>
                            <Typography variant="emphasis">Номер договора</Typography>
                            <Typography variant="medium">{mockData.policyContract}</Typography>
                        </li>
                        <li>
                            <Typography variant="emphasis">Движимое имущество</Typography>
                            <Typography variant="medium">{mockData.personalProperty}</Typography>
                        </li>
                        <li>
                            <Typography variant="emphasis">Период страхования</Typography>
                            <Typography variant="medium">{mockData.policyValidity}</Typography>
                        </li>
                        <li>
                            <Typography variant="emphasis">Страховая сумма</Typography>
                            <Typography variant="medium">{mockData.sumInsured}</Typography>
                        </li>
                        <li>
                            <Typography variant="emphasis">Стоимость полиса</Typography>
                            <Typography variant="medium">{mockData.policyCost}</Typography>
                        </li>
                        <li>
                            <Typography variant="emphasis">Сумма взноса</Typography>
                            <Typography variant="medium">{mockData.paymentAmount}</Typography>
                        </li>
                        <li>
                            <Typography variant="emphasis">Периодичность платежа</Typography>
                            <Typography variant="medium">{mockData.paymentFrequency}</Typography>
                        </li>
                    </ul>
                </CardBody>
            </Card>
        </div>
    );
};
