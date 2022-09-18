import React, { ReactElement } from 'react'
import { Charity } from '../../../types/types'
import TierDashboardCard from '../../donate/TierDashboardCard'
import DonationsReceived from '../../analytics/DonationsReceived';
import LinearOverTime from '../../analytics/LinearOverTime';
import TierBreakdown from '../../analytics/TierBreakdown';

interface Props {
    charity: Charity
}

export default function CharityAnalytics({ charity }: Props) {
    return (
        <div className="mb-6">
            <h1 className="text-2xl font-medium">{charity.name}</h1>
            <div className="flex flex-col">
                <div className="flex flex-row my-1 flex-wrap">
                    <DonationsReceived charity={charity} time='weekly' average={false} />
                    <DonationsReceived charity={charity} time='monthly' average={false} />
                    <DonationsReceived charity={charity} time='all-time' average={true} />
                </div>
                <div className="flex flex-row my-1 flex-wrap">
                    <LinearOverTime charity={charity} />
                </div>
                <div className="flex flex-row my-1 flex-wrap">
                    <TierBreakdown charity={charity} recur={false} />
                </div>
            </div>
        </div>
    )
}