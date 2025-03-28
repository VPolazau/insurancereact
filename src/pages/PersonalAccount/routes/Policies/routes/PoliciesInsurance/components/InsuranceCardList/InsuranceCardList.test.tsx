import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { InsuranceCardList, InsuranceCardListProps } from './InsuranceCardList';

describe('InsuranceCardList', () => {
    const cards: InsuranceCardListProps['cards'] = [
        {
            id: '1',
            property: 'Имущество 1',
            type: 'Тип 1',
            address: 'Адрес 1',
            policyNumber: 'Номер полиса 1',
            policyValidity: 'Срок действия полиса 1',
            policyCost: 'Стоимость полиса 1',
            paymentAmount: 'Сумма взноса 1',
            paymentFrequency: 'Периодичность платежа 1',
        },
        {
            id: '2',
            property: 'Имущество 2',
            type: 'Тип 2',
            address: 'Адрес 2',
            policyNumber: 'Номер полиса 2',
            policyValidity: 'Срок действия полиса 2',
            policyCost: 'Стоимость полиса 2',
            paymentAmount: 'Сумма взноса 2',
            paymentFrequency: 'Периодичность платежа 2',
        },
    ];

    it('should render insurance cards correctly', () => {
        render(
            <MemoryRouter>
                <InsuranceCardList cards={cards} />
            </MemoryRouter>
        );

        // Assert that the insurance card elements are rendered
        const insuranceCards = screen.getAllByTestId('card');
        expect(insuranceCards).toHaveLength(cards.length);

        // Assert that the card properties are rendered correctly
        cards.forEach((card, index) => {
            const insuranceCard = insuranceCards[index];

            expect(insuranceCard).toHaveTextContent(card.property);
            expect(insuranceCard).toHaveTextContent(card.type);
            expect(insuranceCard).toHaveTextContent(card.address);
            expect(insuranceCard).toHaveTextContent(card.policyNumber);
            expect(insuranceCard).toHaveTextContent(card.policyValidity);
            expect(insuranceCard).toHaveTextContent(card.policyCost);
            expect(insuranceCard).toHaveTextContent(card.paymentAmount);
            expect(insuranceCard).toHaveTextContent(card.paymentFrequency);
        });
    });
});
