import { useNavigate } from 'react-router-dom';

import { Header, Footer, Typography, Button } from '../../components';
import error404 from '../../assets/img/error404.svg';

import styles from './styles.module.css';

export const NotFound404 = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    };

    return (
        <>
            <Header />
            <div className={styles.container}>
                <div className={styles.imageWrapper}>
                    <img src={error404} alt="ошибка 404" data-testid="img404" />
                </div>
                <Typography variant="h3" className={styles.title} data-testid="header404">
                    К сожалению, запрашиваемая страница не найдена.
                </Typography>
                <Typography variant="medium" className={styles.subTitle} data-testid="text404">
                    Возможно, вы ввели некорректный адрес или страница была удалена.
                </Typography>
                <Button variant="primary" onClick={handleClick}>
                    Вернуться на главную
                </Button>
            </div>
            <Footer />
        </>
    );
};
