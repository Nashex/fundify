import React from 'react'
import DonationTier from './DonationTier'

type Props = {}

export default function ({ }: Props) {
    return (
        <div className="grid grid-cols-3 gap-2 place-items-stretch">
            <div>
                <DonationTier title="Tier One" description="Free one laborer from a corporation for indetured servitude." amount="5" />
            </div>
            <div>
                <DonationTier title="Tier Two" description="Lick an armpit." amount="15" />
            </div>
            <div>
                <DonationTier title="Tier Three" description="Found a sweat shop." amount="50" />
            </div>
        </div>
    )
}