import React, { useState, useEffect } from 'react'
import { Charity } from '../../types/types'
import { FiMinusSquare, FiPlusSquare } from 'react-icons/Fi'
import { faker } from '@faker-js/faker';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

type Props = {
    charity: Charity,
    title: string,
    y: string,
    average: boolean
}

const labels = ['Tier1', 'Tier2', 'Tier3', 'Custom Amount'];

const data = {
    labels,
    datasets: [
      {
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      },
    ],
  }

export default function TierBreakdown({ charity, title, y, average }: Props) {
    const [hidden, setHidden] = useState(true)

    return (
        <div className="flex flex-col bg-white border-[.5px] border-slate-400 rounded-md p-2">
            <div className="flex flex-row items-center">
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
                    <div className="max-w-[700px] max-h-[600px]">
                        <Doughnut data={data} width = {500} height = {300} options = {{ maintainAspectRatio: true }} />
                    </div>

            }
        </div>
    )
}