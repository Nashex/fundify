import React, { ReactElement } from 'react'
import { Charity } from '../../../types/types'
import TierDashboardCard from '../../donate/TierDashboardCard'

interface Props {
	charity: Charity
}

export default function CharitySection({ charity }: Props): ReactElement {
	return (
		<div className="mb-6">
			<h1 className="text-2xl font-medium">{charity.name}</h1>
			<p className="text-xl text-gray-400">{charity.desc}</p>
			<div className="flex flex-row my-2 space-x-4">
				<div className="relative shadow-sm basis-1/6">
					<TierDashboardCard
						name="Patron"
						desc="Puts 5 more trees in the ground"
						amount={5}
						type="one-time"
						className="blur-[5px] opacity-70"
					/>
					<div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center border border-gray-100">
						<button className="text-2xl text-white bg-green-400 p-2 rounded shadow-md hover:shadow-sm">Create a tier</button>
					</div>
				</div>
				<TierDashboardCard
					name="Patron"
					desc="Puts 5 more trees in the ground"
					amount={5}
					type="one-time"
				/>
			</div>
		</div>
	)
}
