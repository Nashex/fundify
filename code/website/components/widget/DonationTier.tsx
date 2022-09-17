import React from 'react'

type Props = {
    title: string,
    description: string,
    amount: string
}

export default function ({ title, description, amount }: Props) {
    return (
        <div>
            <div className="flex rounded-lg w-full h-full bg-red-200">
                <div className="flex flex-col w-full">
                    <h1 className="py-1 px-2 text-green-500 text-3xl font-bold">{title}</h1>
                    <p className="text-black text-md leading-none px-2 truncate-hidden">{description}</p>
                    <div className="mx-auto justify-center align-middle py-5">
                        <p className="text-black text-xl font-bold">${amount}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}