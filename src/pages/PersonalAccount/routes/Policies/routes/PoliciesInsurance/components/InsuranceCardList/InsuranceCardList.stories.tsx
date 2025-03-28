import { Story, Meta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import { InsuranceCardList, InsuranceCardListProps } from './InsuranceCardList';

export default {
    title: 'UI/InsuranceCardList',
    component: InsuranceCardList,
    decorators: [
        (Story) => (
            <div style={{ padding: '16px', backgroundColor: '#f5f5f5' }}>
                <MemoryRouter>
                    <Story />
                </MemoryRouter>
            </div>
        ),
    ],
    argTypes: {
        cards: {
            description: 'Массив страховых карт',
            control: 'array',
        },
    },
    parameters: {
        docs: {
            description: {
                component: 'Компонент, отображающий список страховых карт.',
            },
        },
    },
    tags: ['autodocs'],
} as Meta;

const Template: Story<InsuranceCardListProps> = (args) => <InsuranceCardList {...args} />;

export const CardList = Template.bind({});
CardList.args = {
    cards: [
        {
            id: '1',
            property: 'Квартира',
            type: 'Имущество',
            address: 'г. Москва, ул. Зеленоградская, д.102, к.5, кв 135',
            policyNumber: 'WIOO12357909',
            policyValidity: '01.01.2023-01.01.2024',
            policyCost: '17 000 ₽',
            paymentAmount: '8 500 ₽',
            paymentFrequency: 'Раз в 6 месяцев',
        },
        {
            id: '2',
            property: 'Автомобиль',
            type: 'Автострахование',
            address: 'г. Санкт-Петербург, ул. Невский проспект, д.10',
            policyNumber: 'ABCD56789012',
            policyValidity: '01.03.2023-01.03.2024',
            policyCost: '25 000 ₽',
            paymentAmount: '12 500 ₽',
            paymentFrequency: 'Раз в 3 месяца',
        },
        {
            id: '3',
            property: 'Путешествия',
            type: 'Путешествия',
            address: 'г. Москва, ул. Красная площадь',
            policyNumber: 'EFGH12345678',
            policyValidity: '01.06.2023-01.06.2024',
            policyCost: '10 000 ₽',
            paymentAmount: '5 000 ₽',
            paymentFrequency: 'Раз в год',
        },
        {
            id: '4',
            property: 'Здоровье',
            type: 'Здоровье',
            address: 'г. Санкт-Петербург, ул. Ленина, д.50',
            policyNumber: 'XYZ78901234',
            policyValidity: '01.05.2023-01.05.2024',
            policyCost: '35 000 ₽',
            paymentAmount: '17 500 ₽',
            paymentFrequency: 'Раз в год',
        },
    ],
};
