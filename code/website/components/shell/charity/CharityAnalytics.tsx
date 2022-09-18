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
                    <DonationsReceived charity={charity} time='all-time' average={true} />
                </div>
                <div className = "flex flex-row my-1 flex-wrap">
                    <LinearOverTime charity = {charity} title = '# Donations Over Time' y = 'donation' average = {false}/>
                    <LinearOverTime charity = {charity} title = '# Dollars Over Time' y = 'dollars' average = {false}/>
                    <LinearOverTime charity = {charity} title = 'Avg. Gift Over Time' y = 'dollars' average = {true}/>
                </div>
                <div className = "flex flex-row my-1 flex-wrap">
                    <TierBreakdown charity = {charity} title = 'One-Time Donations by Tier' recur ={false}/>
                    <TierBreakdown charity = {charity} title = 'Recurring Donations by Tier' recur ={true}/>
                </div>
            </div>
        </div>
    )
}