import { Story, Meta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import { RequestCardList, IRequestCardListProps } from './RequestCardList';

export default {
    title: 'UI/RequestCardList',
    component: RequestCardList,
    decorators: [
        (Story) => (
            <div style={{ padding: '16px', backgroundColor: '#f5f5f5' }}>
                <MemoryRouter>
                    <Story />
                </MemoryRouter>
            </div>
        ),
    ],
    parameters: {
        docs: {
            description: {
                component: 'Компонент, отображающий список заявок.',
            },
        },
    },
    argTypes: {
        requests: {
            description: 'Массив заявок',
            control: 'array',
            table: {
                type: {
                    summary: 'IRequest[]',
                    detail: 'Массив объектов заявок',
                },
            },
        },
    },
    tags: ['autodocs'],
} as Meta;

const Template: Story<IRequestCardListProps> = (args) => <RequestCardList {...args} />;

export const RequestList = Template.bind({});
RequestList.args = {
    requests: [
        {
            id: 1,
            type: 'Страхование квартиры',
            number: 2536324,
            created: '02.11.2022',
            status: 'approved',
            review: '2 дня',
            response: true,
        },
        {
            id: 2,
            type: 'Страхование дома',
            number: 2834324,
            created: '02.11.2022',
            status: 'rejected',
            review: '2 дня',
            response: true,
        },
        {
            id: 3,
            type: 'КАСКО',
            number: 3534324,
            created: '02.11.2022',
            status: 'pending',
            review: '2 дня',
            response: false,
        },
    ],
};
