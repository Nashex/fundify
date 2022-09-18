import React, { useState, useEffect } from 'react'
import { Charity } from '../../types/types'
import { FiMinusSquare, FiPlusSquare } from 'react-icons/Fi'
import { Line } from 'react-chartjs-2';
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

export default function LinearOverTime({ charity, title, y, average }: Props) {
    const [hidden, setHidden] = useState(true)

    // Define variables pertaining to the charts
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const donationData = {
        labels,
        datasets: [
            {
                label: 'Recurring Donations',
                data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'One-Time Donations',
                data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };

    const avgGift = {
        labels,
        datasets: [
            {
                label: 'Avg. Gift',
                data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
                borderColor: 'rgb(119, 235, 52)',
                backgroundColor: 'rgba(12, 173, 114, 0.5)',
            },
        ],
    };

    const dollarsData = {
        labels,
        datasets: [
            {
                label: 'Dollars',
                data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
                borderColor: 'rgb(255, 203, 59)',
                backgroundColor: 'rgba(220, 232, 107, 0.5)',
            },
        ],
    };

    return (
        <div className="flex flex-col bg-white border-[.5px] border-slate-400 rounded-md p-4 h-fit mr-2">
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
                    average == true ?
                    <div className="max-w-[700px] max-h-[600px]">
                        <Line data={avgGift} width = {500} height = {300} options = {{ maintainAspectRatio: true }} />
                    </div>
                    :
                    y == 'donation' ?
                    <div className="max-w-[700px] max-h-[600px]">
                        <Line data={donationData} width = {500} height = {300} options = {{ maintainAspectRatio: true }} />
                    </div>
                    :
                    <div className="max-w-[700px] max-h-[600px]">
                        <Line data={dollarsData} width = {500} height = {300} options = {{ maintainAspectRatio: true }} />
                    </div>
            }
        </div>
    )
}