import React from 'react'
import DonationTier from './DonationTier'

type Props = {
    recurring: boolean,
}

export default function ({recurring}: Props) {
    return (
        <div className="flex flex-row items-stretch w-auto">
                <DonationTier title="Tier 1" description="Free one laborer from a corporation for indetured servitude." amount="5" recurring={recurring}/>
                <DonationTier title="Tier 2" description="Lick an armpit." amount="15" recurring={recurring}/>
                <DonationTier title="Tier 3" description="Found a sweat shop." amount="50" recurring={recurring}/>  
        </div>
    )
}