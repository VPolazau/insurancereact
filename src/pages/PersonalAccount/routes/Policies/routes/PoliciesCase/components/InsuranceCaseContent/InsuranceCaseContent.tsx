import cn from 'classnames';

import { CardBody, Typography } from '../../../../../../../../components';
import { INSURANCE_CASE } from '../../../../../../../../utils/constants';
import { InsuranceCaseContentDescription } from '../InsuranceCaseContentDescription';

import styles from './styles.module.css';

export const InsuranceCaseContent = () => {
    const insuranceCase = INSURANCE_CASE;

    return (
        <div className={styles.container}>
            <CardBody className={cn(styles.card, styles.navMenu)}>
                <ul className={styles.navMenuBlock}>
                    {insuranceCase.map((title) => {
                        return (
                            <li className={styles.item} key={title.id}>
                                <Typography
                                    variant="h3"
                                    className={cn(title.type === 'Имущество' ? styles.activeTitle : styles.title)}
                                >
                                    {title.type}
                                </Typography>
                            </li>
                        );
                    })}
                </ul>
            </CardBody>
            <CardBody className={cn(styles.card, styles.description)}>
                <InsuranceCaseContentDescription />
            </CardBody>
        </div>
    );
};
