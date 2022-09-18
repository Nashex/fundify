import React, { useState, useEffect } from 'react'
import { Charity } from '../../types/types'
import { FiMinusSquare, FiPlusSquare } from 'react-icons/Fi'
import { faker } from '@faker-js/faker';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Menu, Button, Text } from '@mantine/core';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

type Props = {
    charity: Charity,
    title: string,
    recur: boolean,
}

const labels = ['Tier1', 'Tier2', 'Tier3', 'Custom Amount'];

const oneTimeData = {
    labels: ['Tier 1', 'Tier 2', 'Tier 3', 'Custom Donation'],
    datasets: [
        {
            label: '% of whole',
            data: [27, 13, 4, 56],
            backgroundColor: [
                'rgba(255, 99, 132, 0.45)',
                'rgba(54, 162, 235, 0.45)',
                'rgba(255, 206, 86, 0.45)',
                'rgba(75, 192, 192, 0.45)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

const recurData = {
    labels: ['Tier 1', 'Tier 2', 'Tier 3', 'Custom Donation'],
    datasets: [
        {
            label: '% of whole',
            data: [48, 21, 9, 22],
            backgroundColor: [
                'rgba(255, 99, 132, 0.45)',
                'rgba(54, 162, 235, 0.45)',
                'rgba(255, 206, 86, 0.45)',
                'rgba(75, 192, 192, 0.45)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

export default function TierBreakdown({ charity, title, recur }: Props) {
    const [hidden, setHidden] = useState(true)

    return (
        <div className="flex flex-col bg-white border-[.5px] border-slate-400 rounded-md p-2 mb-1 h-fit mr-1">
            <div className="flex flex-row items-center place-content-between">
                <div className="justify-start">
                    <h1 className="text-lg">{title}</h1>
                </div>
                <div className="ml-1 justify-end hover:cursor-pointer">
                    {
                        hidden ?
                            <FiPlusSquare onClick={() => { setHidden(!hidden) }} />
                            :
                            <FiMinusSquare onClick={() => { setHidden(!hidden) }} />
                    }
                </div>
            </div>
            {
                hidden ?
                    <></>
                    :
                    recur ?
                        <div className="max-w-[700px] max-h-[600px]">
                            <Doughnut data={recurData} width={500} height={500} options={{ maintainAspectRatio: true }} />
                        </div>
                        :
                        <div className="max-w-[700px] max-h-[600px]">
                            <Doughnut data={oneTimeData} width={500} height={500} options={{ maintainAspectRatio: true }} />
                        </div>



            }
        </div>
    )
}