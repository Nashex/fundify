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
                <div className="flex flex-row my-1">
                    <DonationsReceived charity={charity} time='all-time' average={true} />
                </div>
                <div className = "flex flex-row my-1">
                    <LinearOverTime charity = {charity} title = 'Donations Over Time' y = 'donation' average = {false}/>
                    <LinearOverTime charity = {charity} title = 'Dollars Over Time' y = 'dollars' average = {false}/>
                </div>
                <div className = "flex flex-row my-1">
                    <TierBreakdown charity = {charity} title = 'Breakdown of Donation Tiers' y = 'donation' average = {false}/>
                </div>
            </div>
        </div>
    )
}