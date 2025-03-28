import { useReducer, useState } from 'react';

import { Immovable, LayoutCustom, Movable, Period, Summary, TotalAmount } from '../../components';

import { INITIAL, OPTIONS_PERIOD, NAV_TAGS } from '../../const/const';

import { reducer } from './reducer';
import { Actions } from './types';

import styles from './styles.module.css';

const ApartmentInsure = () => {
    const [period, setPeriod] = useState(OPTIONS_PERIOD[3].title);
    const [amount, dispatch] = useReducer(reducer, INITIAL.AMOUNT_STATE);

    const handleImmovableChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: Actions.immovable, payload: e.target.value });
    };

    const handleMovableChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: Actions.movable, payload: e.target.value });
    };

    const handleMovable = (value: string) => {
        dispatch({ type: Actions.useMovable, payload: value });
    };

    const handleChangePeriod = (value: string) => {
        const period = OPTIONS_PERIOD.find((p) => p.title === value)?.period;
        if (!period) return;

        dispatch({ type: Actions.period, payload: period });
        setPeriod(value);
    };

    const formatString = (number: number) => new Intl.NumberFormat('ru-RU').format(number);

    return (
        <LayoutCustom tags={NAV_TAGS}>
            <div className={styles.wrapperInsurance}>
                <form className={styles.formInsurance}>
                    <Immovable
                        amount={amount.immovable}
                        amountText={formatString(amount.immovable)}
                        onChange={handleImmovableChange}
                    />
                    <Movable
                        amount={amount.movable}
                        amountText={formatString(amount.movable)}
                        isCountMovable={amount.countMovable}
                        onSwitch={handleMovable}
                        onChange={handleMovableChange}
                    />
                    <Period onChange={handleChangePeriod} />
                    <TotalAmount totalAmount={formatString(amount.total)} />
                </form>
                <Summary
                    total={formatString(amount.total)}
                    periodAmount={formatString(amount.amountInPeriod)}
                    period={period}
                    insuranceAmount={formatString(amount.amount)}
                />
            </div>
        </LayoutCustom>
    );
};

export default ApartmentInsure;
