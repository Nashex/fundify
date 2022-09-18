import React, { ReactElement } from 'react'
import { Charity } from '../../../types/types'
import TierDashboardCard from '../../donate/TierDashboardCard'
import DonationsReceived from '../../analytics/DonationsReceived';

interface Props {
    charity: Charity
}

export default function CharityAnalytics({ charity }: Props) {
    return (
        <div className="mb-6">
            <h1 className="text-2xl font-medium">{charity.name}</h1>
            <div className = "flex flex-row">
                <DonationsReceived charity={charity} time='all-time' average = {true}/>
            </div>
        </div>
    )
}