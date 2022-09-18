import React, { useState, useEffect } from 'react'
import { Charity } from '../../types/types'
import { FiMinusSquare, FiPlusSquare } from 'react-icons/Fi'
import Chart from 'chart.js/auto';

type Props = {
    charity: Charity,
    title: string,
    y: string,
    average: boolean
}

export default function LinearOverTime({ charity, title, y, average }: Props) {
    const [hidden, setHidden] = useState(false)

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
        </div>
    )
}