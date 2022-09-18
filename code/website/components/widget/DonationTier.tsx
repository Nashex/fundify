import React from 'react'
import PaymentButton from './PaymentButton';

type Props = {
    title: string,
    description: string,
    amount: string,
    recurring: boolean
}

export default function ({ title, description, amount, recurring }: Props) {
    return (
        <div className="flex rounded-lg w-full border-[.5px] border-slate-400 mx-2">
            <div className="flex flex-col w-full max-w-sm">
                <h1 className="pt-4 px-4 text-green-400 text-3xl font-bold">{title}</h1>
                <p className="text-gray-600 text-md leading-none px-4 truncate-hidden">{description}</p>
                <div className="mx-auto justify-center align-middle py-5 mt-auto">
                    <div className="flex flex-row items-end">
                        <p className="text-green-400 text-3xl font-bold">${amount}</p>
                        {
                            recurring ?
                                <p className="text-gray-400 text-md">&nbsp;monthly.</p>
                                :
                                <p className="text-gray-400 text-md">&nbsp;once.</p>
                        }
                    </div>
                </div>
                <PaymentButton />
            </div>
        </div>
    )
}