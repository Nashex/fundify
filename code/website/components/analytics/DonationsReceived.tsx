import React, { useState, useEffect } from 'react'
import { Charity } from '../../types/types'


type Props = {
    charity: Charity,
    time: string,
    average: boolean
}

export default function DonationsReceived({ charity, time, average }: Props) {
    const [timetext, setTimetext] = useState('')

    // Determine the timescale for the analytics
    useEffect(() => {
        if (average) {
            if (time == 'monthly') {
                setTimetext('Avg. Gift This Month')
            } else if (time == 'weekly') {
                setTimetext('Avg. Gift This Week')
            } else {
                setTimetext('Avg. Gift All Time')
            }
        } else {
            if (time == 'monthly') {
                setTimetext('Money Raised This Month')
            } else if (time == 'weekly') {
                setTimetext('Money Raised This Week')
            } else {
                setTimetext('Money Raised All Time')
            }
        }
    }, [])

    return (
        <div className="flex flex-col bg-white border-[.5px] border-slate-400 rounded-md p-2">
            <div className="flex justify-center w-full">
                <h1 className="text-lg">{timetext}</h1>
            </div>
            <div className="flex justify-center w-full">
                <h1 className="text-2xl">$6999</h1>
            </div>
        </div>
    )
}