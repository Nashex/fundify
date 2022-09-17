import React, { ReactElement } from 'react'

interface Props {
	name: string
	desc: string
	amount: number,
	type: "monthly" | "one-time"
	className?: string,
	onClick?: (e: Event) => void
}

export default function TierDashboard({ name, desc, amount, type, className }: Props): ReactElement {
	return (
		<div className={`bg-white p-4 rounded basis-1/6 ${className}`}>
			<strong className="text-xl">{name}</strong>
			<p className="text-md text-gray-400">{desc}</p>
			<h1 className="text-5xl font-bold text-green-400 my-10">${amount}</h1>
			<p className="text-lg text-gray-400">This is a {type} donation</p>
			<button className="w-full bg-green-400 p-2 text-xl text-white rounded">Edit this Tier</button>
		</div>
	)
}
