import React from 'react';

import { INSURANCE_CARDS } from '../../../../../../utils/constants';
import { DataPlaceholder } from '../../../../../../components';

import { InsuranceCardList } from './components';

export const PoliciesInsurance = () => {
    const insuranceCards = INSURANCE_CARDS; // TODO получать с бэка

    return insuranceCards.length > 0 ? <InsuranceCardList cards={insuranceCards} /> : <DataPlaceholder />;
};
