import { Actions, ApartmenFormState } from './types';

type Action = {
    type: string;
    payload: string | number;
};

export function reducer(state: ApartmenFormState, action: Action) {
    switch (action.type) {
        case Actions.immovable: {
            const newImmovableAmount = Number(action.payload);
            const newAmount = state.countMovable
                ? state.coefficient * (state.movable + newImmovableAmount)
                : state.coefficient * newImmovableAmount;
            const newTotal = state.countMovable ? state.movable + newImmovableAmount : newImmovableAmount;
            const newAmountInPeriod = Math.ceil(newAmount / state.period);

            return {
                ...state,
                immovable: newImmovableAmount,
                total: newTotal,
                amount: newAmount,
                amountInPeriod: newAmountInPeriod,
            };
        }
        case Actions.movable: {
            const newMovable = Number(action.payload);
            const newTotal = state.countMovable ? state.immovable + newMovable : state.total;
            const newAmount = state.countMovable
                ? state.coefficient * (state.immovable + newMovable)
                : state.coefficient * state.total;
            const newAmountInPeriod = Math.ceil(newAmount / state.period);

            return {
                ...state,
                movable: newMovable,
                total: newTotal,
                amount: newAmount,
                amountInPeriod: newAmountInPeriod,
            };
        }
        case Actions.useMovable: {
            const showMovable = action.payload === 'Да';
            const newTotal = showMovable ? state.immovable + state.movable : state.immovable;
            const newAmount = showMovable
                ? state.coefficient * (state.immovable + state.movable)
                : state.coefficient * state.immovable;
            const newAmountInPeriod = Math.ceil(newAmount / state.period);

            return {
                ...state,
                countMovable: showMovable,
                total: newTotal,
                amount: newAmount,
                amountInPeriod: newAmountInPeriod,
            };
        }
        case Actions.period: {
            const newPeriod = Number(action.payload);
            const newAmountInPeriod = Math.ceil(state.amount / newPeriod);
            return {
                ...state,
                period: newPeriod,
                amountInPeriod: newAmountInPeriod,
            };
        }
        default:
            throw new Error();
    }
}
