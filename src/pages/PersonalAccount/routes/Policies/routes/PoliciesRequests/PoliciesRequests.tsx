import React from 'react';

import { REQUESTS } from '../../../../../../utils/constants';
import { DataPlaceholder } from '../../../../../../components';

import { RequestCardList } from './components';

export const PoliciesRequests = () => {
    const requestList = REQUESTS;

    return requestList.length > 0 ? <RequestCardList requests={requestList} /> : <DataPlaceholder />;
};
