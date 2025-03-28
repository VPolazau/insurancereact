import { render, screen } from '@testing-library/react';

import { InfoCard } from './InfoCard';

describe('InfoCard', () => {
    it('InfoCard with mock data', () => {
        render(<InfoCard className="mockClassInfoCard" children={<h5>Some mock text...</h5>} />);
        expect(screen.getByTestId('infoCard').textContent).toBe('Some mock text...');
        expect(screen.getByTestId('infoCard').classList.contains('mockClassInfoCard')).toBe(true);
        expect(screen.getByTestId('infoCard').classList.contains('infoCardBasic')).toBe(true);
        expect(screen.getByTestId('infoCard')).toBeInTheDocument();
        expect(screen.getByTestId('infoCard')).toMatchSnapshot();
    });
});
