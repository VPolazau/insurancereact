import { fireEvent, render, screen } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { App } from '../../../../components';
import { store } from '../../../../redux';

describe('ApartmentInsure', () => {
    it('should render elements', () => {
        const route = '/property/apartment';
        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={[route]}>
                    <App />
                </MemoryRouter>
            </Provider>
        );

        const immovableHeader = screen.getByTestId('immovableHeader');
        const immovableTitle = screen.getByTestId('immovableTitle');
        const immovableValue = screen.getByTestId('immovableValue');

        const movableHeader = screen.getByTestId('movableHeader');

        const rollers = screen.getAllByTestId('roller');

        const showMovable = screen.getByText('Да');
        const hideMovable = screen.getByText('Нет');

        const periodHeader = screen.getByTestId('periodHeader');
        const periodOnceInMonth = screen.getByTestId('perMonth');
        const periodOnceIn3Month = screen.getByTestId('perThreeMonth');
        const periodOnceIn6Month = screen.getByTestId('perSixMonth');
        const periodOnceIn12Month = screen.getByTestId('perTwelveMonth');

        const insuranceAmount = screen.getByTestId('insuranceAmount');

        const summaryInsuranceLabel = screen.getByTestId('summaryInsuranceLabel');
        const summaryInsuranceAmount = screen.getByTestId('summaryInsuranceAmount');
        const summaryPeriodLabel = screen.getByTestId('summaryPeriodLabel');
        const summaryPeriodAmount = screen.getByTestId('summaryPeriodAmount');
        const summaryTotalLabel = screen.getByTestId('summaryTotalLabel');
        const summaryTotalAmount = screen.getByTestId('summaryTotalAmount');

        expect(immovableHeader).toBeInTheDocument();
        expect(immovableTitle).toBeInTheDocument();
        expect(immovableValue).toBeInTheDocument();

        expect(movableHeader).toBeInTheDocument();

        expect(rollers.length).toBe(1); // второй по дефолту скрыт

        expect(showMovable).toBeInTheDocument();
        expect(hideMovable).toBeInTheDocument();

        expect(periodHeader).toBeInTheDocument();
        expect(periodOnceInMonth).toBeInTheDocument();
        expect(periodOnceIn3Month).toBeInTheDocument();
        expect(periodOnceIn6Month).toBeInTheDocument();
        expect(periodOnceIn12Month).toBeInTheDocument();

        expect(insuranceAmount).toBeInTheDocument();

        expect(summaryInsuranceLabel).toBeInTheDocument();
        expect(summaryInsuranceAmount).toBeInTheDocument();
        expect(summaryPeriodLabel).toBeInTheDocument();
        expect(summaryPeriodAmount).toBeInTheDocument();
        expect(summaryTotalLabel).toBeInTheDocument();
        expect(summaryTotalAmount).toBeInTheDocument();
    });

    it('should show hidden block', () => {
        const route = '/property/apartment';
        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={[route]}>
                    <App />
                </MemoryRouter>
            </Provider>
        );

        let rollers = screen.getAllByTestId('roller');

        expect(rollers.length).toEqual(1);

        fireEvent.click(screen.getByTestId('yes'));

        rollers = screen.getAllByTestId('roller');

        expect(rollers.length).toEqual(2);
    });

    it('should hide block', () => {
        const route = '/property/apartment';
        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={[route]}>
                    <App />
                </MemoryRouter>
            </Provider>
        );

        let rollers = screen.getAllByTestId('roller');

        expect(rollers.length).toEqual(1); // второй блок скрыт

        fireEvent.click(screen.getByTestId('yes')); // нажимаем кнопку показать

        const movableTitle = screen.getByTestId('movableTitle');
        const movableValue = screen.getByTestId('movableValue');

        rollers = screen.getAllByTestId('roller');

        expect(rollers.length).toEqual(2); // оба блока показаны

        expect(movableTitle).toBeInTheDocument();
        expect(movableValue).toBeInTheDocument();

        fireEvent.click(screen.getByTestId('no')); // нажимаем кнопку скрыть

        rollers = screen.getAllByTestId('roller');

        expect(rollers.length).toEqual(1); // второй блок скрыт
    });

    it('should correct change values', () => {
        const route = '/property/apartment';
        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={[route]}>
                    <App />
                </MemoryRouter>
            </Provider>
        );

        const immovableValueElement = screen.getByTestId('immovableValue');
        let immovableValue = immovableValueElement.textContent?.replaceAll('\u00a0', ' ');

        expect(immovableValue).toEqual('2 500 000 ₽');

        fireEvent.change(screen.getByTestId('roller'), { target: { value: 1100000 } });

        immovableValue = immovableValueElement.textContent?.replaceAll('\u00a0', ' ');

        expect(immovableValue).toEqual('1 100 000 ₽');
    });

    it('should correct change values in movable block', () => {
        const route = '/property/apartment';
        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={[route]}>
                    <App />
                </MemoryRouter>
            </Provider>
        );

        fireEvent.click(screen.getByTestId('yes')); // нажимаем кнопку показать

        const rollerMovable = screen.getAllByTestId('roller')[1]; // движемое имущество

        const immovableValueElement = screen.getByTestId('movableValue');
        let movableValue = immovableValueElement.textContent?.replaceAll('\u00a0', ' ');

        expect(movableValue).toEqual('2 000 000 ₽');

        fireEvent.change(rollerMovable, { target: { value: 1100000 } });

        movableValue = immovableValueElement.textContent?.replaceAll('\u00a0', ' ');

        expect(movableValue).toEqual('1 100 000 ₽');
    });

    it('should correct change values in summary block', () => {
        const route = '/property/apartment';
        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={[route]}>
                    <App />
                </MemoryRouter>
            </Provider>
        );

        fireEvent.click(screen.getByTestId('yes')); // нажимаем кнопку показать

        const rollerImmovable = screen.getAllByTestId('roller')[0]; // недвижимое имуществоъ
        const rollerMovable = screen.getAllByTestId('roller')[1]; // движимое имущество

        const insuranceAmountElement = screen.getByTestId('insuranceAmount');
        let insuranceAmount = insuranceAmountElement.textContent?.replaceAll('\u00a0', ' ');

        const summaryAmountElement = screen.getByTestId('summaryInsuranceAmount');
        let summaryInsuranceAmount = summaryAmountElement.textContent?.replaceAll('\u00a0', ' ');

        expect(insuranceAmount).toMatch('4 500 000 ₽');
        expect(summaryInsuranceAmount).toMatch('4 500 000 ₽');

        fireEvent.change(rollerImmovable, { target: { value: 1000000 } });
        fireEvent.change(rollerMovable, { target: { value: 1200000 } });

        insuranceAmount = insuranceAmountElement.textContent?.replaceAll('\u00a0', ' ');
        summaryInsuranceAmount = summaryAmountElement.textContent?.replaceAll('\u00a0', ' ');

        expect(insuranceAmount).toMatch('2 200 000 ₽');
        expect(summaryInsuranceAmount).toMatch('2 200 000 ₽');
    });

    it('should count correct amount per period', () => {
        const route = '/property/apartment';
        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={[route]}>
                    <App />
                </MemoryRouter>
            </Provider>
        );

        // по дефолту выбрано раз в 12 месяцев
        const periodOnceInMonth = screen.getByTestId('perMonth');
        const periodOnceIn3Month = screen.getByTestId('perThreeMonth');
        const periodOnceIn6Month = screen.getByTestId('perSixMonth');
        const periodOnceIn12Month = screen.getByTestId('perTwelveMonth');

        expect(periodOnceInMonth).not.toBeChecked();
        expect(periodOnceIn3Month).not.toBeChecked();
        expect(periodOnceIn6Month).not.toBeChecked();
        expect(periodOnceIn12Month).toBeChecked();

        const summaryPeriodAmount = screen.getByTestId('summaryPeriodAmount');
        let summaryPeriodAmountValue = summaryPeriodAmount.textContent?.replaceAll('\u00a0', ' ');
        expect(summaryPeriodAmountValue).toMatch('раз в 12 месяцев');

        // меняем на раз в 1 месяц
        fireEvent.click(periodOnceInMonth);

        expect(periodOnceInMonth).toBeChecked();
        expect(periodOnceIn3Month).not.toBeChecked();
        expect(periodOnceIn6Month).not.toBeChecked();
        expect(periodOnceIn12Month).not.toBeChecked();

        summaryPeriodAmountValue = summaryPeriodAmount.textContent?.replaceAll('\u00a0', ' ');
        expect(summaryPeriodAmountValue).toMatch('раз в месяц');

        // меняем на раз в 3 месяц
        fireEvent.click(periodOnceIn3Month);

        expect(periodOnceInMonth).not.toBeChecked();
        expect(periodOnceIn3Month).toBeChecked();
        expect(periodOnceIn6Month).not.toBeChecked();
        expect(periodOnceIn12Month).not.toBeChecked();

        summaryPeriodAmountValue = summaryPeriodAmount.textContent?.replaceAll('\u00a0', ' ');
        expect(summaryPeriodAmountValue).toMatch('раз в 3 месяца');

        // меняем на раз в 6 месяцев
        fireEvent.click(periodOnceIn6Month);

        expect(periodOnceInMonth).not.toBeChecked();
        expect(periodOnceIn3Month).not.toBeChecked();
        expect(periodOnceIn6Month).toBeChecked();
        expect(periodOnceIn12Month).not.toBeChecked();

        summaryPeriodAmountValue = summaryPeriodAmount.textContent?.replaceAll('\u00a0', ' ');
        expect(summaryPeriodAmountValue).toMatch('раз в 6 месяцев');

        // меняем на раз в 12 месяцев
        fireEvent.click(periodOnceIn12Month);

        expect(periodOnceInMonth).not.toBeChecked();
        expect(periodOnceIn3Month).not.toBeChecked();
        expect(periodOnceIn6Month).not.toBeChecked();
        expect(periodOnceIn12Month).toBeChecked();

        summaryPeriodAmountValue = summaryPeriodAmount.textContent?.replaceAll('\u00a0', ' ');
        expect(summaryPeriodAmountValue).toMatch('раз в 12 месяцев');
    });

    it('should count correct amount in period', () => {
        const route = '/property/apartment';
        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={[route]}>
                    <App />
                </MemoryRouter>
            </Provider>
        );

        const summaryPeriodAmount = screen.getByTestId('summaryPeriodAmount');
        let summaryPeriodAmountValue = summaryPeriodAmount.textContent?.replaceAll('\u00a0', ' ');

        expect(summaryPeriodAmountValue).toMatch('9 500 ₽'); // по дефолту 2 500 000 общая сумма страхования

        fireEvent.change(screen.getByTestId('roller'), { target: { value: 1100000 } });

        summaryPeriodAmountValue = summaryPeriodAmount.textContent?.replaceAll('\u00a0', ' ');

        expect(summaryPeriodAmountValue).toMatch('4 180 ₽'); // изменили на 1 100 000 общую сумму страхования

        fireEvent.click(screen.getByTestId('yes')); // нажимаем кнопку показать движимое имущество

        const rollerMovable = screen.getAllByTestId('roller')[1]; // движемое имущество

        fireEvent.change(rollerMovable, { target: { value: 1100000 } }); // изменили движимое на 1 100 000, тепрь общая сумма страхования 2 200 000

        summaryPeriodAmountValue = summaryPeriodAmount.textContent?.replaceAll('\u00a0', ' ');

        expect(summaryPeriodAmountValue).toMatch('8 360 ₽');
    });

    it('should make snapshot', () => {
        const route = '/property/apartment';
        const { asFragment } = render(
            <Provider store={store}>
                <MemoryRouter initialEntries={[route]}>
                    <App />
                </MemoryRouter>
            </Provider>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
