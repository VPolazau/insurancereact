import { Typography } from '../Typography';

import styles from './styles.module.css';

interface IError {
    errorMessage: string;
}

export const Error = ({ errorMessage }: IError) => {
    return (
        <Typography variant="small" className={styles.error}>
            {errorMessage}
        </Typography>
    );
};
