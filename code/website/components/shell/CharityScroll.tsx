import React, { ReactElement } from 'react'
import { TbUsers } from 'react-icons/tb'
import WidgetModal from '../widget/WidgetModal'

interface Props {
    name: string,
    description: string,
    totalRaised: number,
    totalDonators: number,
}

export default function CharityScroll({name, description, totalRaised, totalDonators }: Props): ReactElement {
    return (
        <div className="basis-1/3 min-w-[33%] bg-white rounded-lg shadow-md hover:shadow-lg hover:cursor-pointer p-4 mx-2">
            <div className="my-2">
                <strong className="text-2xl text-green-400 min-h-full font-medium">{name}</strong>
                <p className="text-lg text-gray-600">{description}</p>
                <div className="flex flex-row justify-center mt-3 items-start">
                    <div className="flex flex-col items-center p-3">
                        <div className="flex flex-row items-center">
                            <strong className="text-2xl font-bold px-1 align-text-middle text-gray-700"><span className="text-green-400 text-2xl">$</span>{totalRaised}</strong>
                        </div>
                        <p className="text-gray-400">Raised</p>
                    </div>
                    <div className="flex flex-col items-center p-3">
                        <div className="flex flex-row items-center">
                            <strong className="text-2xl font-bold px-1 text-gray-700">{totalDonators}</strong>
                            <TbUsers size={25} className="text-green-400" />
                        </div>
                        <p className="text-gray-400 text-center">Donators</p>
                    </div>
                </div>
                <WidgetModal buttonText = {"Donate"}/>
            </div>
        </div>
    )
}