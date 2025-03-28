import { render, screen } from '@testing-library/react';

import { InfoCardList } from './InfoCardList';

describe('InfoCardList', () => {
    it('InfoCardList with mock className', () => {
        render(<InfoCardList className="mockClassInfoCardList" />);
        expect(screen.getByTestId('infoCardList').classList.contains('mockClassInfoCardList')).toBe(true);
        expect(screen.getByTestId('infoCardList').classList.contains('infoCardListBasic')).toBe(true);
        expect(screen.getByTestId('infoCardList')).toBeInTheDocument();
        expect(screen.getByTestId('infoCardList')).toMatchSnapshot();
    });
});
