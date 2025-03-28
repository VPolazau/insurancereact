import { CardBody, Typography, Card, CardHeader } from '../../../../../../../../components';

import styles from './styles.module.css';

export const PropertyCardObjectInsurance = () => {
    const mockData = {
        id: '1',
        address: 'г. Москва, ул. Зеленоградская, д.102, к.5, кв 135',
        personalProperty: 'Да',
    };
    return (
        <div>
            <Card>
                <CardHeader>
                    <Typography variant="h3">Объект страхования</Typography>
                </CardHeader>
                <CardBody>
                    <ul className={styles.list}>
                        <li>
                            <Typography variant="emphasis">Адрес</Typography>
                            <Typography variant="medium">{mockData.address}</Typography>
                        </li>
                        <li>
                            <Typography variant="emphasis">Движимое имущество</Typography>
                            <Typography variant="medium">{mockData.personalProperty}</Typography>
                        </li>
                    </ul>
                </CardBody>
            </Card>
        </div>
    );
};
