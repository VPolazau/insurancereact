import { CardBody, Typography, Card, CardHeader } from '../../../../../../../../components';

import styles from './styles.module.css';

export const PropertyCardPolicyholder = () => {
    const mockData = {
        id: '1',
        name: 'Максим Максимов Максимович',
        dateOfBirth: '01.01.1991',
        passportData: '6014 623853',
        phoneNumber: '+7 (495) 127-03-03',
        mail: 'vinogradov@gmail.com',
    };
    return (
        <div>
            <Card>
                <CardHeader>
                    <Typography variant="h3">Страхователь</Typography>
                </CardHeader>
                <CardBody>
                    <ul className={styles.list}>
                        <li>
                            <Typography variant="emphasis">ФИО</Typography>
                            <Typography variant="medium">{mockData.name}</Typography>
                        </li>
                        <li>
                            <Typography variant="emphasis">Дата рождения</Typography>
                            <Typography variant="medium">{mockData.dateOfBirth}</Typography>
                        </li>
                        <li>
                            <Typography variant="emphasis">Серия и номер паспорта</Typography>
                            <Typography variant="medium">{mockData.passportData}</Typography>
                        </li>
                        <li>
                            <Typography variant="emphasis">Контактный номер</Typography>
                            <Typography variant="medium">{mockData.phoneNumber}</Typography>
                        </li>
                        <li>
                            <Typography variant="emphasis">Почта</Typography>
                            <Typography variant="medium">{mockData.mail}</Typography>
                        </li>
                    </ul>
                </CardBody>
            </Card>
        </div>
    );
};
