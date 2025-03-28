import { useNavigate } from 'react-router-dom';

import { Typography, Header, Footer, Button } from '../../components';

import { decodeHtmlEntities } from '../../utils/utilities';
import { IN_PROGRESS } from '../../utils/constants';

import robot from '../../assets/img/robot.svg';

import styles from './styles.module.css';

export const InProgress = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(-1);
    };

    return (
        <>
            <Header />
            <div className={styles.container}>
                <div className={styles.imageWrapper}>
                    <img src={robot} alt="Робот разработчик" data-testid="imgInProgress" />
                </div>
                <Typography variant="h2" className={styles.heading} data-testid="headerInProgress">
                    {decodeHtmlEntities(IN_PROGRESS)}
                </Typography>
                <Button variant="primary" onClick={handleClick}>
                    Назад
                </Button>
            </div>
            <Footer />
        </>
    );
};
