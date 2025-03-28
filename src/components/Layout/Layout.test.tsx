import { render, screen } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { Layout } from './Layout';

describe('Layout', () => {
    it('for property page with mock component', () => {
        render(
            <MemoryRouter>
                <Layout
                    className="layoutClass"
                    title="Имущество"
                    isBtnBack={true}
                    tags={null}
                    children={<div>Some mock component</div>}
                />
            </MemoryRouter>
        );
        const layout = screen.getByTestId('LayoutContent');

        expect(layout.textContent).toBe('Some mock component');
        expect(layout.classList.contains('layoutClass')).toBe(true);
        expect(screen.getByText('Имущество')).toBeInTheDocument();
        expect(layout).toBeInTheDocument();
        expect(layout).toMatchSnapshot();
    });
});
