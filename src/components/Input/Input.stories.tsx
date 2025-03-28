import { Form, Formik } from 'formik';

import { Input } from './Input';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Input> = {
    title: 'UI/Input',
    component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;
export const Default: Story = {
    args: {
        name: 'email',
        label: 'Подпись',
    },
    decorators: [
        (Story) => {
            return (
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    onSubmit={() => {}}
                >
                    <Form>
                        <Story />
                    </Form>
                </Formik>
            );
        },
    ],
};

export const Error: Story = {
    args: {
        name: 'email',
        label: 'Подпись',
        errors: ['Некорректный адрес электронной почты'],
    },
    decorators: [
        (Story) => {
            return (
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    onSubmit={() => {}}
                >
                    <Form>
                        <Story />
                    </Form>
                </Formik>
            );
        },
    ],
};
