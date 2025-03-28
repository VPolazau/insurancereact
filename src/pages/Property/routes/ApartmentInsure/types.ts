export type ApartmenFormState = {
    immovable: number;
    movable: number;
    total: number;
    coefficient: number;
    amount: number;
    amountInPeriod: number;
    period: number;
    countMovable: boolean;
};

export enum Actions {
    immovable = 'immovableChange',
    movable = 'movableChange',
    useMovable = 'useMovable',
    period = 'periodChanged',
}
