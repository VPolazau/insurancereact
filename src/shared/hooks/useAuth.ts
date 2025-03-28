import { useAppSelector } from '../../redux/hooks/hooks';
import { selectAccessToken } from '../../redux/slices';

export const useAuth = (): boolean => {
    const accessToken = useAppSelector(selectAccessToken);
    const isAuth = Boolean(accessToken);
    return isAuth;
};
